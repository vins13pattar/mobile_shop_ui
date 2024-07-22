export const login = `
<main class="form-signin w-50 mx-auto p-2 pt-5">
          <form method="POST" id="login-form">
            <img class="mb-4" src="https://placehold.co/72x57/png" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            <div class="form-group my-2">
                <label for="id_username">Username:</label>
                <input type="text" name="username" autofocus="" autocapitalize="none" autocomplete="username" maxlength="150" class="form-control" required="" id="id_username">

              <div class="form-group my-2">
                <label for="id_password">Password:</label>
                <input type="password" name="password" autocomplete="current-password" class="form-control" required="" id="id_password">
                </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <a href="#"> Register</a>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
          </form>
        </main>
`;
