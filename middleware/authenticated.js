export default function ({ $auth, redirect, store }) {
  const auth = $auth.loggedIn

  if (auth) {
    redirect('/usuarioComercio')
  } else {
    redirect('/login')
  }
}
