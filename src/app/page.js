import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page, search) {
  try {
    const where = {};
    const perPage = 6;

    if (search) {
      where.title = {
        contains: search,
        mode: "insensitive",
      };
    }

    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);

    const skip = (page - 1) * perPage;
    const next = page < totalPages ? page + 1 : null;
    const prev = page > 1 ? page - 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: {
        id: "desc",
      },
      include: {
        author: true,
        comments: true,
      },
    });

    return { data: posts, prev, next };
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [], prev, next };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const search = searchParams?.q;
  const { data: posts, prev, next } = await getAllPosts(currentPage, search);
  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: search } }}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: search } }}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
