//----------단축키----------
$('html').keypress(function (event) {
    if (event.keyCode == 'S'.charCodeAt(0) && event.shiftKey) {
        window.location.href = 'Home/Download';
    }
    else if (event.keyCode == 's'.charCodeAt(0) && $('#dropdownMenuFile').attr('aria-expanded') == 'true') {
        window.location.href = 'Home/Download';
    }
    else if (event.keyCode == 's'.charCodeAt(0) && $('#dropdownMenuView').attr('aria-expanded') == 'true') {
        ChangeVisibilityState();
    }
    else if (event.keyCode == 'f'.charCodeAt(0) && $('#dropdownMenuHelp').attr('aria-expanded') == 'true') {
        window.location.href = "mailto:ploseok@gmail.com";
    }
    console.log(event.keyCode + ' which = ' + event.which);
});
//----------단축키----------

//----------드롭다운 아이템 클릭 이벤트----------
$('#item-exit').click(function () {
    window.open('', '_self').close();
});
$('#item-state').click(function () {
    ChangeVisibilityState();
});
$('#item-send-feedback').click(function () {
    window.location.href = "mailto:ploseok@gmail.com";
});
//----------드롭다운 아이템 클릭 이벤트----------

//----------보기 > 상태 표시줄 표시 기능----------
var footerHeight = $('#footer').height();
function ChangeVisibilityState() {
    var footer = $('#footer');
    if (footer.height() == 0) {
        footer.css('height', footerHeight+'px');
        footer.css('visibility', 'visible');
    }
    else {
        footer.css('height', '0px');
        footer.css('visibility', 'hidden');
    }
}
//----------보기 > 상태 표시줄 표시 기능----------

//----------DOM이 완성됐을 때----------
$(document).ready(function () {
    $("#content").mCustomScrollbar({
        axis: "y",
        theme: "notepad",
        scrollInertia: 0,
        scrollButtons: {
            enable: true
        },
        keyboard: {
            enable: true
        },
        alwaysShowScrollbar: 1,
        callbacks: {
            onOverflowY: function () {
                $('.mCSB_buttonUp').css('opacity', '1');
                $('.mCSB_buttonDown').css('opacity', '1');
                $('.mCSB_buttonUp').hover(function () {
                    $(this).css("backgroundColor", "rgb(218, 218, 218)");
                }, function () {

                    $(this).css("backgroundColor", "rgb(240, 240, 240)");
                });
                $('.mCSB_buttonDown').hover(function () {
                    $(this).css("backgroundColor", "rgb(218, 218, 218)");
                }, function () {
                    $(this).css("backgroundColor", "rgb(240, 240, 240)");
                });
            }, onOverflowYNone: function () {
                $('.mCSB_buttonUp').css('opacity', '0.3');
                $('.mCSB_buttonDown').css('opacity', '0.3');
                $('.mCSB_buttonUp').unbind('hover');
                $('.mCSB_buttonDown').unbind('hover');
            }
        }
    });
    setTimeout(function () {
        $('#wallpaper').css('visibility', 'visible');
        $('.loader').remove();
    }, 1500); //1.5초 뒤에 윈도우 로딩 애니메이션 제거
});
//----------DOM이 완성됐을 때----------