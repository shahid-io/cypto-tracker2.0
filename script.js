const form = document.querySelector("#searchForm");
const res = document.querySelector("#tableResult");

const c_name = document.querySelector("#name");
const c_price = document.querySelector("#price");
const c_volume = document.querySelector("#volume");
const c_change = document.querySelector("#change");
const c_market = document.querySelector("#market");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ctype = form.elements.coinType.value;
  fetchPrice(ctype);
});

const fetchPrice = async (ctype) => {
  const r = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`
  );
  console.log(r);
  const name = r.data.coin.name;
  const price = r.data.coin.price;
  const volume = r.data.coin.volume;
  const change = r.data.coin.priceChange1d;
  const marketCap = r.data.coin.marketCap;

  c_name.innerHTML = name;
  c_price.innerHTML = price;
  c_volume.innerHTML = volume;
  c_change.innerHTML = change;
  c_market.innerHTML = marketCap;
};
