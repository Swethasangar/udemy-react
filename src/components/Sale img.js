import saleimg from "../assests/Images/Sale-image.jpeg";
// <!-- Sale Image -->

function SaleImg() {
  return (
    <div class="sale-image">
      <img src={saleimg} alt="Sale-image" />
      <div class="sale-image__offer">
        <h1>Udemy Flash Sale! 24 hours to save.</h1>
        <p>
          Get the top courses for just 499. Just one day to save but a lifetime
          to learn.
        </p>
      </div>
    </div>
  );
}
export default SaleImg;
