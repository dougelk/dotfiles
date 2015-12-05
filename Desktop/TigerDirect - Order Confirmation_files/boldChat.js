var bccbId = Math.random(); document.write(unescape('%3Cdiv id=' + bccbId + '%3E%3C/div%3E'));
window._bcvma = window._bcvma || [];
_bcvma.push(["setAccountID", "778417244579749153"]);
_bcvma.push(["setParameter", "WebsiteID", "2931227138053347667"]);
_bcvma.push(["addText", { type: "chat", window: "87515702329408647", available: "", unavailable: "", id: bccbId }]);
var bcLoad = function () {
    if (window.bcLoaded) return; window.bcLoaded = true;
    var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true;
    vms.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "vmss.boldchat.com/aid/778417244579749153/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
};
if (window.pageViewer && pageViewer.load) pageViewer.load();
else if (document.readyState == "complete") bcLoad();
else if (window.addEventListener) window.addEventListener('load', bcLoad, false);
else window.attachEvent('onload', bcLoad);

$(function () {

    try {

        $('.liveChat,#ChatLive').click(function () { //button to click to open

            if ($('.bc-chat-container').css('display') !== 'none') { //this needs to be pointed to the new element, not the floating button

                $('.bcText a').click();
            }

            if ($('.bc-minimize-container').css('display') !== 'none') {

                $('.bc-minimize-state-container').click();
            }
            else if ($('.bc-frame-body').css('display') !== 'none') {

                $('.bc-frame-body').click();
            }
        });
    }
    catch (e) { }
});