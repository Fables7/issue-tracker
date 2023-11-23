import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination itemCount={200} pageSize={10} currentPage={1} />;
}
