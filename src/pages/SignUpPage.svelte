<script>
  import axios from 'axios';

  
  let username;
  let email;
  let password;
  let repetedPassword;
  let disabled = true;

  $: disabled = (password && repetedPassword) ? password !== repetedPassword : true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('api/users', {
      username,
      email,
      password,
    });
  }

</script>
  <form action="">
  <h1>Sign Up</h1>
  <label for="username">Username</label>
  <input id="username" type="text" placeholder="Enter surname" data-testid="username" bind:value={username} />
  <label for="email">Email</label>
  <input id="email" type="email" placeholder="Enter email address" data-testid="email" bind:value={email} />
  <label for="password">Password</label>
  <input id="password" type="password" data-testid="password" bind:value={password} />
  <label for="repeatPassword" >Repeat Password</label>
  <input id="repeatPassword" type="password" data-testid="password" bind:value={repetedPassword} />
  <button {disabled} on:click={handleSubmit}>Sign Up</button>
</form>