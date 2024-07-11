fetch("https://api-chi-roan.vercel.app")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
