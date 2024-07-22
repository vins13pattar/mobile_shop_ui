export const contact = `
<div id="contact-us" class="container-fluid py-5 bg-primary-subtle">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <h2>Contact us</h2>

          <form id="enquiry">
            <div class="row">
              <div class="col mb-3">
                <label for="first_name" class="form-label text-dark"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div class="col mb-3">
                <label for="last_name" class="form-label text-dark"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div class="row">
              <div class="col mb-3">
                <label for="email_address" class="form-label text-dark"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email_address"
                  placeholder="We'll never share your email with anyone else."
                />
              </div>
              <div class="col mb-3">
                <label for="mobile" class="form-label text-dark">Mobile</label>
                <input
                  type="number"
                  class="form-control"
                  id="mobile"
                  placeholder="We'll never share your mobile number with anyone else."
                />
              </div>
            </div>

            <select
              id="product"
              class="form-select mb-3"
              aria-label="Default select mobile"
            >
              <option selected>Select Mobile</option>
              <option value="Mobile 1">Mobile 1</option>
              <option value="Mobile 2">Mobile 2</option>
              <option value="Mobile 3">Mobile 3</option>
            </select>

            <div class="mb-3">
              <label for="enquiry_message" class="form-label text-dark"
                >Enquiry Message</label
              >
              <textarea
                class="form-control"
                id="enquiry_message"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
`