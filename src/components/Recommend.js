import c1 from "../assests/Images/c1.jpg";
import c2 from "../assests/Images/c2.jpg";
import c3 from "../assests/Images/c3.jpg";
import c4 from "../assests/Images/c4.jpg";
function Recommend() {
  return (
    // <!-- Recommended -->
    <div class="recommended">
      <h1 class="recommended__title">Recommended For You</h1>
      <p>Pick The Best Fit For You</p>
      <div class="recommended__container">
        <div class="course_card">
          <img src={c1} alt="Course1" />
          <h3>The Complete 2024 web Development Bootcamp</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div class="course_card">
          <img src={c2} alt="Course2" />
          <h3>The Web Developer BootCamp 2024</h3>
          <p>Col Steele</p>
          <p>3.9⭐⭐⭐</p>
          <p>
            559 <del>1999</del>
          </p>
        </div>

        <div class="course_card">
          <img src={c3} alt="Course3" />
          <h3>100 Days Of Code:The Complete Python ProBootCamp</h3>
          <p>Col Steele</p>
          <p>4.8⭐⭐⭐⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div class="course_card">
          <img src={c4} alt="Course4" />
          <h3>Ultimate AWS Certified Cloud Practitioner</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>
            749 <del>1999</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Recommend;
