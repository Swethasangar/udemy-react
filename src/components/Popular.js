import c1 from "../assests/Images/c1.jpg";
import c2 from "../assests/Images/c2.jpg";
import c3 from "../assests/Images/c3.jpg";
import c4 from "../assests/Images/c4.jpg";
import c5 from "../assests/Images/c5.jpg";
import c6 from "../assests/Images/c6.jpg";
import c7 from "../assests/Images/c7.jpg";
import c8 from "../assests/Images/c8.jpg";
function Popular() {
  return (
    // <!-- Popular Section -->
    <div class="popular">
      <h1 class="popular__title">Most Popular</h1>
      <p class="popular__subtitle">Choose The Best For You</p>
      <div class="popular__container">
        <div class="course_card">
          <img src={c1} alt="Course1" />
          <h3>The Web Developer BootCamp 2024</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>
            559 <del>1999</del>
          </p>
        </div>
        <div class="course_card">
          <img src={c2} alt="Course2" />
          <h3>The Complete 2024 web Development Bootcamp</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>

        <div class="course_card">
          <img src={c4} alt="Course3" />
          <h3>Ultimate AWS Certified Cloud Practitioner</h3>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>
            749 <del>1999</del>
          </p>
        </div>
        <div class="course_card">
          <img src={c3} alt="Course4" />
          <h3>100 Days Of Code:The Complete Python ProBootCamp</h3>
          <p>Col Steele</p>
          <p>4.8⭐⭐⭐⭐</p>
          <p>
            449 <del>1999</del>
          </p>
        </div>
        <div class="course_card">
          <img src={c7} alt="Course5" />
          <h3>React-The Complete Guide 2024</h3>
          <p>Col Steele</p>
          <p>4.6⭐⭐⭐⭐</p>
          <p>
            489 <del>1999</del>
          </p>
        </div>
        <div class="course_card">
          <img src={c6} alt="Course6" />
          <h3>Machine Learning A-Z:AI, Python & R</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>
            549 <del>1999</del>
          </p>
        </div>
        <div class="course_card">
          <img src={c8} alt="Course7" />
          <h3>Microsoft Power BI</h3>
          <p>Col Steele</p>
          <p>4.7⭐⭐⭐⭐</p>
          <p>
            679 <del>1999</del>
          </p>
        </div>
        <div class="course_card">
          <img src={c5} alt="Course8" />
          <h3>Data Science Course</h3>
          <p>Col Steele</p>
          <p>4.7⭐⭐⭐⭐</p>
          <p>
            849 <del>1999</del>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Popular;