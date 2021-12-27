import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 수정 페이지입니다</p>
    </div>
  );
};

export default Edit;
