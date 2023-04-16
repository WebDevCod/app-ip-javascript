const form = document.querySelector("#form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "feb932e89emsh13694e3ac2eae56p110edajsn7681dbfee59c",
    "X-RapidAPI-Host": "ip-reputation-geoip-and-detect-vpn.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`,
    OPTIONS
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { value } = input;
  if (!value) return;

  submit.setAttribute("disabled", "");
  submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  submit.removeAttribute("disabled");
  submit.removeAttribute("aria-busy");
});
