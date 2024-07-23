export const home = `
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/static/images/mobile-1.jpg"
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/static/images/mobile-1.jpg"
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://mobile-shop-api-8e7c1abc4ef8.herokuapp.com/static/images/mobile-1.jpg"
        class="d-block w-100"
        alt="..."
      />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="container my-5 text-center">
  <h2>Our mobiles</h2>
  <div id="products"></div>
</div>

<section class="container py-5">
  <p class="fs-2 p-2 text-center">Enquiry</p>

  <form id="enquiry">
    <div class="row text">
      <div class="col-md-6 offset-md-3">
        <div class="row my-2">
          <div class="col" id="first_name_block">
            <label for="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              maxlength="50"
              required=""
              required
            />
            <div class="invalid-feedback">Please enter a valid first name</div>
          </div>
          <div class="col" id="last_name_block">
            <label for="last_name">Last name</label>
            <input
              name="last_name"
              id="last_name"
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              minlength="2"
              maxlength="50"
              required="required"
            />
          </div>
        </div>

        <div class="row my-2">
          <div class="col">
            <label for="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              required
            />
          </div>
          <div class="col">
            <label for="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              type="text"
              class="form-control"
              placeholder="Phone"
              aria-label="Phone"
              required
              inputmode="numeric"
              pattern="[6789][0-9]{9}"
            />
          </div>
        </div>

        <div class="row my-2">
          <div class="col">
            <label for="message">Message</label>
            <textarea
              class="form-control"
              name="message"
              id="message"
            ></textarea>
          </div>
        </div>

        <div class="p-2 my-2">
          <button class="btn btn-primary" type="submit">Enquiry</button>
        </div>
      </div>
    </div>
  </form>
</section>
`