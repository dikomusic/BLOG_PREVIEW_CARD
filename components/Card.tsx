import Blog from "@/components/Blog";
import Header from "@/components/Header";
import Profile from "@/components/Profile";

const Card = () => {
  return (
    <div className="contenido">
      <img
        src="./illustration-article.svg"
        alt=""
        className="illustration-article"
      />
      <Header />
      <Blog />
      <Profile />
    </div>
  );
};

export default Card;
