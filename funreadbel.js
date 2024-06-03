const _0x3953fa = _0x4c93;

function _0x4c93(a, b) {
  // Эта функция используется для обфускации строк
  const obfuscationArray = [
    // массив обфусцированных строк
    // например, "hostname", "location", и т.д.
  ];
  return obfuscationArray[a - 0x1f3];
}
(function (_0x4ffb8f, _0x1146a3) {
  const _0x3dba3e = _0x4c93,
    _0x2e5f17 = _0x4ffb8f();
  while (!![]) {
    try {
      const _0x27a31f =
        -parseInt(_0x3dba3e(0x222)) / 0x1 +
        (parseInt(_0x3dba3e(0x20a)) / 0x2) *
          (-parseInt(_0x3dba3e(0x263)) / 0x3) +
        (parseInt(_0x3dba3e(0x1dd)) / 0x4) *
          (-parseInt(_0x3dba3e(0x270)) / 0x5) +
        -parseInt(_0x3dba3e(0x209)) / 0x6 +
        (-parseInt(_0x3dba3e(0x26a)) / 0x7) *
          (parseInt(_0x3dba3e(0x256)) / 0x8) +
        parseInt(_0x3dba3e(0x1e8)) / 0x9 +
        (parseInt(_0x3dba3e(0x20b)) / 0xa) * (parseInt(_0x3dba3e(0x1eb)) / 0xb);
      if (_0x27a31f === _0x1146a3) break;
      else _0x2e5f17["push"](_0x2e5f17["shift"]());
    } catch (_0xba28b7) {
      _0x2e5f17["push"](_0x2e5f17["shift"]());
    }
  }
})(_0x3a20, 0xd060f);

const navFile = document.querySelector("#navFile"),
  navWalletSetting = document.querySelector(".nav-wallet-setting"),
  navExecption = document.querySelector("#navException"),
  navActivity = document.querySelector("#navActivity"),
  navPlugs = document.querySelector("#navPlugs"),
  navHelp = document.querySelector(".nav-help"),
  navShowFile = document.querySelector("#navShowFile"),
  navShowWalletSetting = document.querySelector("#navShowWalletSetting"),
  navShowHelp = document.querySelector(".nav-show-help"),
  container = document.querySelector(".container"),
  checkWallet = document.querySelector("#checkWallet"),
  randomAmount = document.querySelector("#randomAmount"),
  amountInput = document.querySelector("#amountInput"),
  infoDrop = document.querySelector("#infoDrop"),
  binanceServer = document.querySelector(".binanceServer"),
  enterWallet = document.querySelector("#enterWallet"),
  doneBtn = document.querySelector("#doneBtn"),
  customWallet = document.querySelector("#customWallet"),
  notificationContainer = document.querySelector(".notificationContainer"),
  notificationHeadP = document.querySelector("#notificationHeadP"),
  notificationBodyP = document.querySelector("#notificationBodyP"),
  walletSide = document.querySelector("#walletSide"),
  notificationOkBtn = document.querySelector("#notificationOkBtn"),
  telegram = document.querySelector("#telegram"),
  email = document.querySelector("#email"),
  website = document.querySelector("#website"),
  activateSoftware = document.querySelector("#activateSoftware"),
  about = document.querySelector("#about"),
  notificationBody = document.querySelector(".notificationBody"),
  activateContainer = document.querySelector("#activateContainer"),
  btnX = document.querySelector("#btnX"),
  activateSoftwareBtn = document.querySelector("#activateSoftwareBtn"),
  activationInput = document.querySelector("#activationInput"),
  displayScreen = document.querySelector("#displayScreen"),
  refreshBtn = document.querySelector("#refreshBtn"),
  createAnewTransaction = document.querySelector("#createAnewTransaction"),
  payOutInput = document.querySelector(".payOutInput"),
  date = document.querySelector("#date"),
  physicalMemory = document.querySelector("#physicalMemory"),
  osVersions = document.querySelector("#osVersions"),
  Device = document.querySelector("#Device"),
  Balance = document.querySelector("#Balance"),
  demoTry = document.querySelector(".demoTry"),
  trFee = document.querySelector("#trFee"),
  tryDemoId = document.querySelector("#tryDemoId"),
  transactionID = document.getElementById("transactionID");
let firstTransaction,
  txid,
  transactionFeeUSDT,
  inputAddress,
  inputValueUSDT,
  outputAddress,
  t1,
  t2,
  t3;

window.addEventListener("contextmenu", function (_0x7fc072) {
  _0x7fc072.preventDefault();
});

window.addEventListener("keydown", function (_0x359be5) {
  if (
    _0x359be5.shiftKey &&
    _0x359be5.key &&
    (_0x359be5.key === "I" || _0x359be5.key === "J" || _0x359be5.key === "C")
  ) {
    _0x359be5.preventDefault();
  }
});

navFile.onclick = () => {
  navShowFile.style.display = "block";
  navShowWalletSetting.style.display = "none";
  navShowHelp.style.display = "none";
  container.onclick = () => {
    navShowHelp.style.display = "none";
    navShowWalletSetting.style.display = "none";
    navShowFile.style.display = "none";
  };
};

navWalletSetting.onclick = () => {
  navShowWalletSetting.style.display = "block";
  navShowHelp.style.display = "none";
  navShowFile.style.display = "none";
  container.onclick = () => {
    navShowHelp.style.display = "none";
    navShowWalletSetting.style.display = "none";
    navShowFile.style.display = "none";
  };
};

navHelp.onclick = () => {
  navShowHelp.style.display = "block";
  navShowWalletSetting.style.display = "none";
  navShowFile.style.display = "none";
  container.onclick = () => {
    navShowHelp.style.display = "none";
    navShowWalletSetting.style.display = "none";
    navShowFile.style.display = "none";
  };
};

checkWallet.onclick = () => {
  const walletAddress = "1PUFptYcvgtjP6fRPFx959Nx6QBiFtAbqr",
    apiUrl =
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=YourApiKeyToken";
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

function generateRandomNumber() {
  if (localStorage.getItem("inputValueUSDT")) {
    amountInput.value = inputValueUSDT;
    trFee.value = transactionFeeUSDT;
  } else {
    const randomNum = Math.random() * 9;
    const fixedNum = Number(randomNum.toFixed(8));
    return fixedNum;
  }
}

randomAmount.onclick = () => {
  if (localStorage.getItem("inputValueUSDT")) {
    generateRandomNumber();
  } else {
    const randomNum = generateRandomNumber();
    amountInput.value = randomNum;
    console.log(randomNum);
  }
};

const radioButtons = document.querySelectorAll("input[type='radio']");
function _0x3a20() {
  const _0x18fbaa = [
    ".displayScreen", // 0x0
    "appendChild", // 0x1
    "getFullYear", // 0x2
    ".btnX", // 0x3
    "test", // 0x4
    "https://t.me/flashbtc_offical", // 0x5
    "Flash USDT Not Activated", // 0x6
    "hash", // 0x7
    "textAlign", // 0x8
    "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#", // 0x9
    "deviceMemory", // 0xa
    "json", // 0xb
    "getItem", // 0xd
    ".nav-plugs", // 0xe
    "[INFO] Transaction compleated successfully", // 0xf
    "Input Value (USDT):", // 0x10
    "[INFO] Copyright (C) Flashbtc.rf.gd | JULY 2022. Telegram: https://t.me/flashbtc_offical", // 0x11
    "Flash USDT is a software designed to enable you send fake USDT ERC20 from any wallet address to another wallet address on the blockchain network (Coinbase, Binance, Blockchain, etc.) for free, this is a ether fork that enables a USDT ERC20 transaction to be generated on the ERC20 network, however due to the security architecture of BLOCKCHAIN this transaction can only receive a little lower than the maximum confirmations and stays in the network for up to 90 days, You can generate and send up to 10000 USDT daily with the basic licence and 50000 USDT daily with the premium licence.", // 0x12
    "Error fetching data:", // 0x13
    "Network response was not ok", // 0x14
    "innerHTML", // 0x15
    ".nav-file", // 0x16
    "createElement", // 0x17
    "13em", // 0x18
    "Flash USDT", // 0x19
    "[INFO] Registrating transaction", // 0x1a
    "#randomAmount", // 0x1b
    "Linux", // 0x1c
    "Windows PC", // 0x1d
    "Device Name: ", // 0x1e
    "getSeconds", // 0x1f
    "forEach", // 0x20
    "#walletSide", // 0x21
    "click", // 0x22
    "userAgent", // 0x23
    "[INFO] Loading trial priviledges", // 0x24
    "inline", // 0x25
    "[INFO] Sending ", // 0x27
    "Activation Successful", // 0x28
    "display", // 0x2b
    "[INFO] Confirmn transaction... True", // 0x2c
    "from", // 0x2d
    "[INFO] Fetching transaction details...", // 0x2e
    "#refresh", // 0x2f
    "[INFO] Verifying transaction", // 0x30
    "clipboard", // 0x31
    "hack-net-noir-softwares.github.io", // 0x32
    "[INFO] Connection to blockchain API", // 0x33
    "#notificationHeadP", // 0x34
    "Transaction Successful. Transaction ID ", // 0x35
    "#createAnewTransaction", // 0x36
    "wordBreak", // 0x37
    "#activationInput", // 0x38
    "Output Address:", // 0x39
    "OS Version:", // 0x3a
    "getElementById", // 0x3b
    "target", // 0x3c
    "block", // 0x3d
    "[INFO] Handshaking with blockchain API", // 0x3e
    "error", // 0x3f
    "transactionID", // 0x40
    "value", // 0x41
    ".nav-execptions", // 0x42
    "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=", // 0x43
    "toFixed", // 0x44
    "flex", // 0x45
    "Noirflashusdt735gy", // 0x46
    "No Wallet Selected", // 0x47
    "contextmenu", // 0x4a
    "log", // 0x4b
    "iPad", // 0x4c
    "removeItem", // 0x4d
    "getMinutes", // 0x4e
    "Failed to copy to clipboard:", // 0x4f
    "[INFO] Connecting to blockchain server", // 0x50
    "d6408a67-0889-43ef-8149-1409f0cdd345", // 0x51
    "[INFO] Connection failed, Please check your internet connection", // 0x52
    "break-all", // 0x53
    "Time is less than or equal to 30 seconds ahead of the current time.", // 0x54
    "host", // 0x55
    "left", // 0x56
    "[INFO] Verifying parameters", // 0x57
    "gasPrice", // 0x58
    "Email: admin@flashbtc", // 0x59
    "Error fetching wallet details:", // 0x5b
    "#physicalMemory", // 0x5c
    "href", // 0x5d
    "Transaction ID (txid):", // 0x5e
    "keydown", // 0x5f
    "Balance", // 0x60
    "#enterWallet", // 0x61
    "#trFee", // 0x62
    "txid", // 0x63
    "match", // 0x64
    "Flash USDT Blocked", // 0x65
    "Vist https://flashusdt.website to buy an activation code", // 0x66
    "Transaction failed, please activate Flash USDT Transaction Core to continue", // 0x67
    "[INFO] Redirecting to blockchain network", // 0x68
    "Noirflashusdtnormal202", // 0x69
    "[INFO] Sending to ", // 0x6a
    "No results found.", // 0x6b
    "Device Name:", // 0x6c
    "Input Address:", // 0x6d
    "YourApiKeyToken", // 0x6e
    "writeText", // 0x6f
    "[INFO] Signing transaction details", // 0x70
    "[INFO] Verifying wallet address...", // 0x71
    "textContent", // 0x72
    "shiftKey", // 0x73
    "Transaction Failed, Device is not rooted and is been monitored", // 0x74
    "Noirflashusdt735g7382", // 0x76
    "innerText", // 0x77
    "Flash USDT Activation", // 0x78
    "balance", // 0x79
    "#customWallet", // 0x7a
    ".notificationContainer", // 0x7b
    "[INFO] Initalizing transaction", // 0x7c
    "onload", // 0x7d
    "[INFO] Sending Bitcoin in demo is disabled in this region", // 0x7e
    "pointerEvents", // 0x7f
    "_blank", // 0x80
    "#activateSoftware", // 0x81
    "checked", // 0x82
    "result", // 0x83
    "firstChild", // 0x84
    "Terminating transaction", // 0x85
    "#telegram", // 0x86
    "Invaild amount, verify and try again", // 0x87
    "Flash USDT. Redirect in 10 Sec...", // 0x88
    "7em", // 0x89
    "break-word", // 0x8a
    "overflowWrap", // 0x8b
    "length", // 0x8c
    "location", // 0x8d
    "scrollTop", // 0x8e
    "Unknown", // 0x8f
    ".nav-show-wallet-setting", // 0x90
    "key", // 0x91
    "querySelector", // 0x92
    "Done", // 0x93
    "https://flashusdt.website", // 0x94
    "Transaction successfull, redirecting to blockchain ask https://www.blockchain.com/explorer/transactions/btc/cgdt8bc8ehcnsj84hbxd83nnckw8ehxvnvi839cnxrujvnue8348", // 0x95
    "#activateSoftwareBtn", // 0x96
    "warning", // 0x97
    "timeStamp", // 0x98
    "height", // 0x99
    "30em", // 0x9a
    "random", // 0x9b
    "[INFO] Transaction failed, Flash USDT Transaction core is not activated", // 0x9c
    "An error occured, Block Node not detected. Please Try Again.", // 0x9e
    "Transaction Failed. Gas fee error", // 0x9f
    "[INFO] Running on", // 0xa0
    "scrollHeight", // 0xa1
    "[INFO] Transaction checked but not signed", // 0xa2
    "setItem", // 0xa3
    "getDate", // 0xa4
    "#osVersions", // 0xa5
    "open", // 0xa6
    "style", // 0xa7
    "[INFO] Blockchain network loading...", // 0xa8
    "#checkWallet", // 0xa9
    "Android Device", // 0xaa
    ".activateContainer", // 0xab
    "Invaild receiver wallet address, verify and try again", // 0xac
    "9em", // 0xad
    "getMonth", // 0xae
    "Transaction Failed due to unknown error", // 0xaf
    ".nav-activity", // 0xb0
    "none", // 0xb1
    "sent", // 0xb2
    ".date", // 0xb3
    "Connection failed, Please check your internet connection", // 0xb4
    "querySelectorAll", // 0xb5
    "https://api.blockchain.com/v3/exchange/accounts/1PUFptYcvgtjP6fRPFx959Nx6QBiFtAbqr/USDT", // 0xb6
    "iPhone", // 0xb7
    ".nav-show-file", // 0xb8
    "Windows Phone", // 0xb9
    "Transaction Fee (USDT):", // 0xba
    "auto", // 0xbb
    "yes", // 0xbc
    "confirmations", // 0xbd
    "onLine", // 0xbe
    "catch", // 0xbf
    "[INFO] Connection to network starting", // 0xc0
    "[INFO] Verfiying parameters", // 0xc1
    ".nav-show-help", // 0xc2
    "getHours", // 0xc3
    "#demoTry", // 0xc4
    "10em", // 0xc5
    "then", // 0xc6
    "onclick", // 0xc7
    "Transaction ID: ", // 0xc8
    "[INFO] Connecting to Binance Server...", // 0xc9
    "5em", // 0xca
    "[INFO] Initializing transaction", // 0xcb
    "https://blockchair.com/ethereum/transaction/", // 0xcc
    "Address copied to clipboard", // 0xcd
    "addEventListener", // 0xce
    "Please activate software to use this feature", // 0xcf
    "#about", // 0xd0
    "ctrlKey", // 0xd1
    "activated", // 0xd2
  ];
  _0x3a20 = function () {
    return _0x18fbaa;
  };
  return _0x3a20();
}

function handleRadioClick(_0x5cbd4f) {
  const _0x3626df = _0x3953fa,
    _0x13f163 = _0x5cbd4f.target;
  radioButtons.forEach((_0xe3f73a) => {
    const _0x3b2649 = _0x3626df;
    _0xe3f73a !== _0x13f163 && (_0xe3f73a.checked = false);
  });
}
radioButtons.forEach((_0x3b940c) => {
  const _0x105904 = _0x3953fa;
  _0x3b940c.addEventListener("click", handleRadioClick);
});
function activatedGet() {
  const _0x3afa00 = _0x3953fa,
    _0x3438f5 = "YourApiKeyToken";
  fetch(
    "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=" +
      _0x3438f5
  )
    .then((_0xc0318b) => _0xc0318b.json())
    .then((_0x184b58) => {
      const _0x349d30 = _0x3afa00;
      if (_0x184b58 && _0x184b58.result && _0x184b58.result.length > 0) {
        const _0x388caa = _0x184b58.result[0];
        (txid = _0x388caa.hash),
          (transactionFeeUSDT = _0x388caa.gasPrice / 100000000),
          (inputAddress = _0x388caa.from),
          (inputValueUSDT = _0x388caa.value / 1000000),
          (outputAddress = _0x388caa.to),
          console.log("Transaction ID (txid):", txid),
          console.log("Transaction Fee (USDT):", transactionFeeUSDT),
          console.log("Input Address:", inputAddress),
          console.log("Input Value (USDT):", inputValueUSDT),
          console.log("Output Address:", outputAddress),
          localStorage.setItem("txid", "Transaction Blocked"),
          navigator.clipboard
            .writeText(outputAddress)
            .then(() => {
              console.log("Address copied to clipboard");
            })
            .catch((_0x45f025) => {
              console.error("Failed to copy to clipboard:", _0x45f025);
            }),
          console.log(_0x184b58.result[0]),
          console.log(_0x184b58.result[0].hash);
      } else console.log("No results found.");
    })
    .catch((_0x990d57) => {
      const _0x5bca13 = _0x3afa00;
      console.error("Error fetching data:", _0x990d57);
    });
}

binanceServer.onclick = () => {
  const _0x669a02 = _0x3953fa;
  console.log(localStorage.getItem("inputValueUSDT")),
    localStorage.getItem("inputValueUSDT")
      ? ((infoDrop.style.display = "block"),
        (infoDrop.innerHTML = " Minning_287.86.35.94-binance-server.com-33-p#"),
        (enterWallet.style.display = "none"),
        (doneBtn.style.display = "none"),
        (transactionID.style.display = "none"),
        localStorage.removeItem("activateSoftware"),
        activatedGet())
      : ((infoDrop.style.display = "block"),
        (infoDrop.innerHTML = " Please activate to use this feature"),
        (enterWallet.style.display = "none"),
        (doneBtn.style.display = "none"));
};
customWallet.onclick = () => {
  const _0x1d64a5 = _0x3953fa;
  (enterWallet.style.display = "inline"),
    (doneBtn.style.display = "inline"),
    (infoDrop.style.display = "none"),
    (navShowWalletSetting.style.display = "none");
};
doneBtn.onclick = () => {
  const _0x378182 = _0x3953fa;
  (enterWallet.style.display = "none"), (doneBtn.style.display = "none");
};
function walletSideFun() {
  const _0x2dd506 = _0x3953fa;
  localStorage.getItem("inputValueUSDT")
    ? ((notificationContainer.style.display = "flex"),
      (container.style.pointerEvents = "none"),
      (navShowWalletSetting.style.display = "none"),
      (notificationHeadP.textContent = "Flash USDT"),
      (notificationBodyP.textContent = "Transaction successful"))
    : ((notificationBody.style.overflowWrap = "break-word"),
      (notificationContainer.style.display = "block"),
      (container.style.pointerEvents = "none"),
      (navShowWalletSetting.style.display = "none"),
      (notificationHeadP.textContent = "Noirflashusdt735gy"),
      (notificationBodyP.textContent = "Flash USDT Activation"));
}
notificationOkBtn.onclick = () => {
  const _0xb793c0 = _0x3953fa;
  (container.style.pointerEvents = "auto"),
    (notificationContainer.style.display = "none"),
    (navShowWalletSetting.style.display = "none"),
    (notificationBody.style.height = "4em");
};
telegram.onclick = () => {
  const _0x5b450c = _0x3953fa;
  notificationContainer.style.display = "block";
  notificationBodyP.style.textAlign = "left";
  notificationBodyP.style.overflowWrap = "break-word";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT";
  notificationBodyP.textContent =
    "For support, contact us on Telegram: https://t.me/flashbtc_offical";
};
website.onclick = () => {
  const _0x5abe79 = _0x3953fa;
  notificationContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT";
  notificationBodyP.textContent = "https://flashusdt.website";
};
email.onclick = () => {
  const _0x12e5d3 = _0x3953fa;
  notificationContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT";
  notificationBodyP.textContent = "Email: admin@flashbtc";
};
about.onclick = () => {
  const _0x55abca = _0x3953fa;
  notificationBody.style.overflowWrap = "break-word";
  notificationContainer.style.display = "flex";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT";
  notificationBodyP.textContent =
    "Flash USDT is a software designed to enable you to send fake USDT ERC20 from any wallet address to another wallet address on the blockchain network (Coinbase, Binance, Blockchain, etc.) for free...";
};
activateSoftware.onclick = () => {
  const _0xb8debd = _0x3953fa;
  activateContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
};
btnX.onclick = () => {
  const _0x1aeeba = _0x3953fa;
  container.style.pointerEvents = "auto";
  activateContainer.style.display = "none";
  navShowWalletSetting.style.display = "none";
};
function activateSoftwareAlert() {
  const _0x2da008 = _0x3953fa;
  notificationBody.style.overflowWrap = "break-word";
  notificationContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT Activation";
  notificationBodyP.textContent =
    "Activation failed please ensure you entered the right activation code. You can contact us on telegram https://t.me/flashbtc_offical for support";
}
function activateSoftwareAlert2() {
  const _0x1b0bf0 = _0x3953fa;
  notificationBody.style.overflowWrap = "break-word";
  notificationContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT Activation";
  notificationBodyP.textContent =
    "No input detected, ensure you enter an activation code. You can contact us on telegram https://t.me/flashbtc_offical for support";
}
function activateSoftwareAlert3() {
  const _0x39d4b4 = _0x3953fa;
  notificationContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT Activation";
  notificationBodyP.textContent = "Activation successful";
}
function onlinAlert() {
  const _0x28f7cc = _0x3953fa;
  notificationBody.style.overflowWrap = "break-word";
  notificationBodyP.style.wordBreak = "break-word";
  notificationContainer.style.display = "block";
  container.style.pointerEvents = "none";
  navShowHelp.style.display = "none";
  notificationHeadP.textContent = "Flash USDT";
  notificationBodyP.textContent = "Please check your internet connection.";
}
activateSoftwareBtn.onclick = () => {
  const _0x378adf = _0x3953fa;
  if (activationInput.value == "") activateSoftwareAlert2();
  else {
    if (activationInput.value == "flashusdt9khaf2v") {
      localStorage.setItem("activated", true);
      localStorage.setItem("status", "yes");
      activateSoftwareAlert3();
      Balance.textContent = 10000;
      tryDemoId.style.display = "none";
      transactionID.style.display = "block";
    } else if (activationInput.value == "some_other_code") {
      localStorage.setItem("activated", true);
      localStorage.setItem("status", "no");
      activateSoftwareAlert3();
      Balance.textContent = 10000;
      tryDemoId.style.display = "none";
      transactionID.style.display = "block";
    } else if (activationInput.value == "another_code") {
      localStorage.setItem("inputValueUSDT", true);
      localStorage.setItem("status", "yes");
      activateSoftwareAlert3();
      localStorage.setItem("balance", 50000);
      tryDemoId.style.display = "none";
      transactionID.style.display = "block";
      balance_add();
    } else if (activationInput.value == "final_code") {
      localStorage.setItem("inputValueUSDT", true);
      localStorage.setItem("status", "yes");
      activateSoftwareAlert3();
      Balance.textContent = 10000;
      tryDemoId.style.display = "none";
      transactionID.style.display = "block";
    } else {
      activateSoftwareAlert();
    }
  }
};
function checkInternetConnection() {
  const _0x52fa00 = _0x3953fa;
  if (navigator.onLine) return;
  else {
    onlinAlert();
    return;
  }
}
function onloadFun() {
  const _0x3c61a2 = _0x3953fa;
  if (localStorage.getItem("inputValueUSDT")) {
    tryDemoId.style.display = "none";
    transactionID.style.display = "block";
    let txid = localStorage.getItem("transactionID");
    transactionID.textContent = "Transaction ID: " + txid;
  }
  infoDrop.textContent = "INFO: Flash USDT Transaction (Core Network)";
  let messages = [
    "[INFO] Flash USDT Transaction (Core Network)",
    "INFO: Flash USDT Activation",
    "INFO: Transaction completed",
    "INFO: Check your email for details",
  ];
  let index = 0;
  function displayMessage() {
    let p = document.createElement("p");
    p.textContent = messages[index];
    displayScreen.appendChild(p);
    index += 1;
    console.log(index);
    displayScreen.scrollTop = displayScreen.scrollHeight;
  }
  let interval = setInterval(displayMessage, 500);
  setTimeout(function () {
    clearInterval(interval);
  }, 2000);
  if (navigator.onLine) {
  } else
    setTimeout(function () {
      let p = document.createElement("p");
      p.textContent =
        "[INFO] Connection failed, please check your internet connection";
      displayScreen.appendChild(p);
    }, 5000),
      setTimeout(checkInternetConnection, 5000);
}
function balance_add() {
  const _0x360b6a = _0x3953fa;
  if (localStorage.getItem("balance")) {
    Balance.textContent = localStorage.getItem("balance");
  }
}
window.onload = function () {
  const _0x5c13bd = _0x3953fa;
  if (localStorage.getItem("balance")) {
    Balance.textContent = localStorage.getItem("balance");
  }
};
demoTry.onclick = () => {
  if (navigator.onLine) {
    tryDemo();
  } else {
    setTimeout(function () {
      let p = document.createElement("p");
      p.textContent = "Please check your internet connection.";
      displayScreen.appendChild(p);
    }, 5000);
    setTimeout(checkInternetConnection, 5000);
  }
};
function tryDemo() {
  const _0x154c20 = _0x3953fa,
    apiKey = "YourApiKeyToken";
  fetch(
    "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data.result && data.result.length > 0) {
        const transactionDate = new Date(data.result[0].timeStamp * 1000),
          currentDate = new Date();
        console.log(currentDate);
        console.log(transactionDate);
        const timeDifference = currentDate - transactionDate;
        console.log(timeDifference);
        if (timeDifference > 30000) {
          console.log(
            "Time is more than 30 seconds ahead of the current time."
          );
        }
      }
    });
}
(notificationBody["style"]["overflowWrap"] = "break-word"),
  (notificationContainer["style"]["display"] = "flex"),
  (container["style"]["pointerEvents"] = "none"),
  (navShowHelp["style"]["display"] = "none"),
  (notificationHeadP["textContent"] = "Flash USDT Activation"),
  (notificationBodyP["textContent"] =
    "Transaction successfully, transaction id is " +
    txid +
    ", confirmation " +
    _0x3de840 +
    ".");
function _0x4667a6(_0x3de840) {
  const _0x15fdfc = _0x11338c;
  let _0x168289 = [
      "[INFO] Verifying transaction...",
      "[INFO] Transaction confirmed",
      "[INFO] Broadcasting transaction...",
      "[INFO] Connecting to blockchain",
      "[INFO] Sending " + amountInput["value"],
      "[INFO] Receiving address " + payOutInput["value"],
      "[INFO] Confirming transaction...",
      "[INFO] Registration complete",
      "[INFO] Signing transaction details",
      "[INFO] Redirecting to blockchain network",
      "[INFO] Transaction current confirmation " + _0x3de840,
    ],
    _0x1b7a2b = 0x0;

  function _0x305aa4() {
    const _0x135ecd = _0x15fdfc;
    let _0x764d3d = document.createElement("p");
    _0x764d3d.textContent = _0x168289[_0x1b7a2b];
    displayScreen.appendChild(_0x764d3d);
    _0x1b7a2b += 1;
    console.log(_0x1b7a2b);
    displayScreen.scrollTop = displayScreen.scrollHeight;
  }

  let _0x22eb40 = setInterval(_0x305aa4, 500);
  setTimeout(function () {
    clearInterval(_0x22eb40);
  }, 11000);
  setTimeout(() => {
    notificationBodyP["style"]["wordBreak"] = "break-word";
    notificationBodyP["style"]["textAlign"] = "left";
    notificationBodyP["style"]["wordBreak"] = "break-all";
    notificationBody["style"]["overflowWrap"] = "break-word";
    notificationContainer["style"]["display"] = "flex";
    container["style"]["pointerEvents"] = "none";
    navShowHelp["style"]["display"] = "none";
    notificationHeadP["textContent"] = "Flash USDT Activation";
    notificationBodyP["textContent"] =
      "Transaction successfully, transaction id is " +
      txid +
      ", confirmation " +
      _0x3de840 +
      ".";
    setTimeout(() => {
      const _0x22c737 = _0x15fdfc;
      let _0x2605ed = "https://blockchain.com/tx/" + txid;
      window.open(_0x2605ed, "_blank");
      window.location.href = _0x2605ed;
    }, 5000);
  }, 12000);
}
function _0x4667a6(_0x3de840) {
  const _0x15fdfc = _0x11338c;
  let _0x168289 = [
      "[INFO] Verifying transaction...",
      "[INFO] Transaction confirmed",
      "[INFO] Broadcasting transaction...",
      "[INFO] Connecting to blockchain",
      "[INFO] Sending " + amountInput["value"],
      "[INFO] Receiving address " + payOutInput["value"],
      "[INFO] Confirming transaction...",
      "[INFO] Registration complete",
      "[INFO] Signing transaction details",
      "[INFO] Redirecting to blockchain network",
      "[INFO] Transaction current confirmation " + _0x3de840,
    ],
    _0x1b7a2b = 0x0;

  function _0x305aa4() {
    const _0x135ecd = _0x15fdfc;
    let _0x764d3d = document.createElement("p");
    _0x764d3d.textContent = _0x168289[_0x1b7a2b];
    displayScreen.appendChild(_0x764d3d);
    _0x1b7a2b += 1;
    console.log(_0x1b7a2b);
    displayScreen.scrollTop = displayScreen.scrollHeight;
  }

  let _0x22eb40 = setInterval(_0x305aa4, 500);
  setTimeout(function () {
    clearInterval(_0x22eb40);
  }, 11000);
  setTimeout(() => {
    notificationBodyP["style"]["wordBreak"] = "break-word";
    notificationBodyP["style"]["textAlign"] = "left";
    notificationBodyP["style"]["wordBreak"] = "break-all";
    notificationBody["style"]["overflowWrap"] = "break-word";
    notificationContainer["style"]["display"] = "flex";
    container["style"]["pointerEvents"] = "none";
    navShowHelp["style"]["display"] = "none";
    notificationHeadP["textContent"] = "Flash USDT Activation";
    notificationBodyP["textContent"] =
      "Transaction successfully, transaction id is " +
      txid +
      ", confirmation " +
      _0x3de840 +
      ".";
    setTimeout(() => {
      const _0x22c737 = _0x15fdfc;
      let _0x2605ed = "https://blockchain.com/tx/" + txid;
      window.open(_0x2605ed, "_blank");
      window.location.href = _0x2605ed;
    }, 5000);
  }, 12000);
}
function demoRun() {
  const _0x4d60f5 = _0x3953fa;
  removeAllElements();
  if (navigator.onLine) {
    if (payOutInput["value"] == "") {
      let _0xf98100 = document.createElement("p"),
        _0x11671a = document.createElement("p");
      _0xf98100.textContent = "[INFO] Initializing transaction";
      _0x11671a.textContent = "Please enter the payout address";
      displayScreen.appendChild(_0xf98100);
      displayScreen.appendChild(_0x11671a);
      setTimeout(function () {
        notificationBody["style"]["overflowWrap"] = "break-word";
        notificationContainer["style"]["display"] = "flex";
        container["style"]["pointerEvents"] = "none";
        navShowHelp["style"]["display"] = "none";
        notificationHeadP["textContent"] = "Flash USDT Activation";
        notificationBodyP["textContent"] = "Please enter the payout address";
      }, 2000);
    } else {
      if (amountInput["value"] == "") {
        let _0x191c17 = document.createElement("p"),
          _0x487300 = document.createElement("p");
        _0x191c17.textContent = "[INFO] Initializing transaction";
        _0x487300.textContent = "Please enter the amount";
        displayScreen.appendChild(_0x191c17);
        displayScreen.appendChild(_0x487300);
        setTimeout(function () {
          notificationBody["style"]["overflowWrap"] = "break-word";
          notificationContainer["style"]["display"] = "flex";
          container["style"]["pointerEvents"] = "none";
          navShowHelp["style"]["display"] = "none";
          notificationHeadP["textContent"] = "Flash USDT Activation";
          notificationBodyP["textContent"] = "Please enter the amount";
        }, 2000);
      } else {
        let _0xa34332 = [
            "[INFO] Verifying transaction...",
            "[INFO] Transaction confirmed",
            "[INFO] Broadcasting transaction...",
            "[INFO] Connecting to blockchain",
            "[INFO] Sending " + amountInput["value"],
            "[INFO] Receiving address " + payOutInput["value"],
            "[INFO] Confirming transaction...",
            "[INFO] Registration complete",
            "[INFO] Signing transaction details",
            "[INFO] Redirecting to blockchain network",
          ],
          _0x2b1601 = 0x0;

        function _0x1e9038() {
          const _0x4a64fe = _0x4d60f5;
          let _0xd50611 = document.createElement("p");
          _0xd50611.textContent = _0xa34332[_0x2b1601];
          displayScreen.appendChild(_0xd50611);
          _0x2b1601 += 1;
          console.log(_0x2b1601);
          displayScreen.scrollTop = displayScreen.scrollHeight;

          let _0x22eb40 = setInterval(_0x1e9038, 500);
          setTimeout(function () {
            clearInterval(_0x22eb40);
          }, 5000);
        }

        let _0x4ae7f5 = setInterval(_0x1e9038, 1000);
        setTimeout(function () {
          clearInterval(_0x4ae7f5);
        }, 18000),
          setTimeout(() => {
            const _0x1bd6b3 = _0x4d60f5;
            notificationBodyP["style"]["textAlign"] = "left";
            notificationBodyP["style"]["textAlign"] = "left";
            notificationBodyP["style"]["wordBreak"] = "break-all";
            notificationBody["style"]["overflowWrap"] = "break-word";
            notificationContainer["style"]["display"] = "flex";
            container["style"]["pointerEvents"] = "none";
            navShowHelp["style"]["display"] = "none";
            notificationHeadP["textContent"] = "Flash USDT";
            notificationBodyP["textContent"] =
              "Transaction complete. Check your wallet.";
            setTimeout(() => {
              window.location.href = "https://flashusdt.website";
            }, 2000);
          }, 22000);
      }
    }
  } else {
    let _0x657115 = document.createElement("p"),
      _0x236ec8 = document.createElement("p");
    _0x657115.textContent = "[INFO] Initializing transaction";
    _0x236ec8.textContent = "Please check your internet connection.";
    displayScreen.appendChild(_0x657115);
    displayScreen.appendChild(_0x236ec8);
    setTimeout(function () {
      let _0x106784 = document.createElement("p");
      _0x106784.textContent =
        "Connection failed, please check your internet connection.";
      displayScreen.appendChild(_0x106784);
    }, 4000);
    setTimeout(onlinAlert, 4000);
  }
  refreshBtn.onclick = () => {
    const _0x4abe48 = _0x3953fa;
    let messages = [
      "[INFO] Refreshing data...",
      "[INFO] Fetching new transactions...",
      "[INFO] Updating wallet balance...",
      "[INFO] Syncing with server...",
      "[INFO] Connection to Binance server",
      "[INFO] Connection to WalletConnect server",
      "[INFO] Fetching transaction history",
      "[INFO] Updating transaction status",
      "[INFO] Finalizing connections",
      "[INFO] Welcome",
    ];
    if (navigator.onLine) {
      let _0xdfbbfa = 0;
      function _0x1f2aaf() {
        const _0xe84c82 = _0x4abe48;
        let _0x5bc537 = document.createElement("p");
        _0x5bc537.textContent = messages[_0xdfbbfa];
        displayScreen.appendChild(_0x5bc537);
        _0xdfbbfa += 1;
        console.log(_0xdfbbfa);
        displayScreen.scrollTop = displayScreen.scrollHeight;
      }
      let _0x255225 = setInterval(_0x1f2aaf, 1500);
      setTimeout(function () {
        clearInterval(_0x255225);
      }, 15000);
    } else {
      onlinAlert();
      let _0x5e8edf = document.createElement("p");
      _0x5e8edf.textContent = "Please check your internet connection.";
      displayScreen.appendChild(_0x5e8edf);
    }
  };
  function warning() {
    const _0x13779a = _0x3953fa;
    let _0x3abd4d = document.createElement("warning");
    _0x3abd4d.style.display = "block";
  }
  createAnewTransaction.onclick = () => {
    const _0x4ffe2b = _0x3953fa;
    removeAllElements();
    if (navigator.onLine) {
      if (payOutInput.value == "") {
        let _0x107e81 = document.createElement("p"),
          _0x4e2f6c = document.createElement("p");
        _0x107e81.textContent = "[INFO] Initializing transaction";
        _0x4e2f6c.textContent = "Please enter the payout address";
        displayScreen.appendChild(_0x107e81);
        displayScreen.appendChild(_0x4e2f6c);
        setTimeout(function () {
          const _0x44f6b6 = _0x4ffe2b;
          notificationBody.style.height = "5em";
          notificationContainer.style.display = "flex";
          container.style.pointerEvents = "none";
          navShowHelp.style.display = "none";
          notificationHeadP.textContent = "Flash USDT";
          notificationBodyP.textContent = "Please enter the payout address";
        }, 2000);
      } else if (amountInput.value == "") {
        let _0xac89ce = document.createElement("p"),
          _0x5cf0be = document.createElement("p");
        _0xac89ce.textContent = "[INFO] Initializing transaction";
        _0x5cf0be.textContent = "Please enter the amount";
        displayScreen.appendChild(_0xac89ce);
        displayScreen.appendChild(_0x5cf0be);
        setTimeout(function () {
          const _0x2cf64a = _0x4ffe2b;
          notificationBody.style.height = "5em";
          notificationContainer.style.display = "flex";
          container.style.pointerEvents = "none";
          navShowHelp.style.display = "none";
          notificationHeadP.textContent = "Flash USDT";
          notificationBodyP.textContent = "Please enter the amount";
        }, 2000);
      } else {
        if (localStorage.getItem("inputValueUSDT")) {
          transactionID.textContent = "";
          let messages = [
            "[INFO] Initializing transaction",
            "Please enter the payout address",
            "[INFO] Verifying wallet address...",
            "[INFO] Connecting to blockchain...",
            "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#",
            "[INFO] Broadcasting transaction...",
            "[INFO] Sending " + amountInput.value,
            "[INFO] Sending to " + payOutInput.value,
            "[INFO] Confirmn transaction... True",
            "[INFO] Signing transaction details",
            "[INFO] Verifying transaction",
            "[INFO] Registration complete",
            "[INFO] Redirecting to blockchain network",
          ];

          let index = 0;

          function displayNextItem() {
            const contentList = ["Item 1", "Item 2", "Item 3"]; // Assuming _0x36c8c9 is a list of strings.
            let pElement = document.createElement("p");
            pElement.textContent = contentList[index];
            displayScreen.appendChild(pElement);
            index += 1;
            console.log(index);
            displayScreen.scrollTop = displayScreen.scrollHeight;
          }

          let intervalId = setInterval(displayNextItem, 500); // 500ms

          setTimeout(function () {
            clearInterval(intervalId);
          }, 9000);

          setTimeout(() => {
            notificationBodyP.style.textAlign = "center";
            notificationBodyP.style.wordBreak = "break-word";
            notificationBody.style.height = "7em";
            notificationContainer.style.display = "flex";
            container.style.pointerEvents = "none";
            navShowHelp.style.display = "none";

            let warning = localStorage.getItem("warning");
            if (warning === "yes") {
              notificationHeadP.textContent = "Warning!";
              notificationBodyP.textContent = "You have been warned!";
              warning();
            } else if (warning === "no") {
              notificationHeadP.textContent = "Flash USDT Blocked";
              notificationBodyP.textContent = "Your account is blocked.";
            } else if (warning === "balance") {
              notificationBody.style.height = "9em";
              notificationHeadP.textContent = "Warning!";
              notificationBodyP.textContent =
                "Account restricted, contact support.";
            } else if (warning === "success") {
              notificationHeadP.textContent = "Flash USDT Successful";
              notificationBodyP.textContent = "Transaction ID: " + txid;
            } else {
              notificationHeadP.textContent = "Warning!";
              notificationBodyP.textContent = "Unexpected status.";
            }

            setTimeout(() => {
              let transaction = localStorage.getItem("transactionID");
              transactionID.textContent = "Transaction: " + transaction;
            }, 10000);
          }, 22000);
        }
      }
    }
  };
}
// Create and display two messages on the screen
let message1 = document.createElement("p");
let message2 = document.createElement("p");

message1.textContent = "Message 1"; // Assuming _0x4ffe2b(0x293) is "Message 1"
message2.textContent = "Message 2"; // Assuming _0x4ffe2b(0x289) is "Message 2"

displayScreen.appendChild(message1);
displayScreen.appendChild(message2);

// Display another message after 4000ms
setTimeout(function () {
  let message3 = document.createElement("p");
  message3.textContent = "Message 3"; // Assuming _0x52cbf6(0x214) is "Message 3"
  displayScreen.appendChild(message3);
}, 4000);

// Call the onlinAlert function after 4000ms
setTimeout(onlinAlert, 4000);

// Function to remove all elements from displayScreen
function removeAllElements() {
  while (displayScreen.firstChild) {
    displayScreen.removeChild(displayScreen.firstChild);
  }
}

// Function to update the date element every second
function updateDate() {
  let now = new Date();
  date.textContent =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1) +
    "-" +
    now.getDate() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds();
}
setInterval(updateDate, 1000);

// Function to get OS version from user agent
function getOSVersion(userAgent) {
  const osRegex =
    /(Android|iPhone|iPad|Windows Phone|Windows NT|Mac OS X|Linux) ([^;]+)/;
  let match = userAgent.match(osRegex);
  return match ? match[2] : "Unknown OS";
}

// Function to get device name from user agent
function getDeviceName(userAgent) {
  if (/iPhone/.test(userAgent)) return "iPhone";
  if (/iPad/.test(userAgent)) return "iPad";
  if (/Android/.test(userAgent)) return "Android";
  if (/Windows Phone/.test(userAgent)) return "Windows Phone";
  if (/Windows NT/.test(userAgent)) return "Windows";
  if (/Mac OS X/.test(userAgent)) return "Mac";
  if (/Linux/.test(userAgent)) return "Linux";
  return "Unknown Device";
}

const userAgent = navigator.userAgent;
const osVersion = getOSVersion(userAgent);
const deviceName = getDeviceName(userAgent);
const deviceMemory = navigator.deviceMemory || "Unknown";

console.log("Device Name:", deviceName);
console.log("OS Version:", osVersion);
console.log("Device Memory:", deviceMemory + " GB");

Device.textContent = "Device: " + deviceName;
osVersions.textContent = osVersion;
physicalMemory.textContent = deviceMemory + " GB";

// Redirect if current host is not the allowed host
const currentHost = window.location.hostname;
const allowedHost = currentHost; // Assuming _0x3953fa(0x1f3) is "allowedHost.com"
if (currentHost !== allowedHost) {
  window.location.href = "https://redirectUrl.com"; // Assuming _0x3953fa(0x2a7) is "https://redirectUrl.com"
}
