<script>
  let disabled = true;
  let password;
  let repetedPassword;

  $: disabled = (password && repetedPassword) ? password !== repetedPassword : true;

</script>

<h1>Sign Up</h1>
<label for="username">Username</label>
<input id="username" type="text" placeholder="Enter surname" data-testid="username" />
<label for="emali">Email</label>
<input type="email" placeholder="Enter email address" data-testid="email" />
<label for="password">Password</label>
<input id="password" type="password" data-testid="password" bind:value={password} />
<label for="repeatPassword" >Repeat Password</label>
<input id="repeatPassword" type="password" data-testid="password" bind:value={repetedPassword} />
<button {disabled}>Sign Up</button>