const SSID = $network.wifi.ssid;
const proxywifi = ["Redmi_BakerStreet_221B_5G","Redmi_BakerStreet_221B"];
let res = proxywifi.some(val => val === SSID);
if (res) {
$surge.setOutboundMode("direct");
notify(1);
} else {
$surge.setOutboundMode("rule");
notify(0);
}

function notify(mode) {
setTimeout(function(){
!!mode ? $notification.post("Wi-Fi助手","切换到直连模式","") : $notification.post("Wi-Fi助手","WIFI-Proxy"+"SSID: "+SSID, "切换到分流模式")
}) }
$done();