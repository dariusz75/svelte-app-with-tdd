<script>
  import axios from 'axios';

  let username;
  let email;
  let password;
  let repetedPassword;
  let disabled = true;
  let apiProgress = false;

  $: disabled = (password && repetedPassword) ? password !== repetedPassword : true;

  const handleSubmit = (e) => {
    e.preventDefault();
    apiProgress = true;
    disabled = true;
    axios.post('/api/1.0/users', { username, email, password });
  }

</script>
<div class="col-lg-6 offset-lg-3">
  <form class="card mt-5">
    <div class="card-header">
      <h1 class="text-center">Sign Up</h1>
    </div>
    <div class="card-body p-5">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" class="form-control" type="text" placeholder="Enter surname" data-testid="username" bind:value={username} />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" class="form-control" type="email" placeholder="Enter email address" data-testid="email" bind:value={email} />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" class="form-control" type="password" data-testid="password" bind:value={password} />
      </div>
      <div class="form-group">
        <label for="repeatPassword" >Repeat Password</label>
        <input id="repeatPassword" class="form-control" type="password" data-testid="password" bind:value={repetedPassword} />
      </div>
      <div class="text-center">
        <button class="btn btn-primary" {disabled} on:click={handleSubmit}>
          {#if apiProgress }
          <span class="spinner-border spinner-border-sm" role="status" data-testid="spinner"></span>
          {/if}
            Sign Up
        </button>
      </div>
    </div>
  </form>
</div>