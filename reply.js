var params = (new URL(document.location)).searchParams;


$(function () {
  // 送信
  $('form').submit(function () {
    // 有給
    var check = $('input[name="check"]').val()
    // 遅刻
    var check1 = $('input[name="check1"]').val()
    var time1 = $('input[name="time1"]').val()
    // 早退
    var check2 = $('input[name="check2"]').val()
    var time2 = $('input[name="time2"]').val()
    // 訪問先
      // 訪問先１
      // お客様名１
      var cname1 = $('input[name="cname1"]').val();
      var cname1ch1 = $('input[name="cname1-ch1"]').val();
      var cname1ch2 = $('input[name="cname1-ch2"]').val();
      var cname1text = $('textarea[name="cname1-text"]').val();
      // お客様名２
      var cname2 = $('input[name="cname2"]').val();
      var cname2ch1 = $('input[name="cname2-ch1"]').val();
      var cname2ch2 = $('input[name="cname2-ch2"]').val();
      var cname2text = $('textarea[name="cname2-text"]').val();
      // お客様名３
      var cname3 = $('input[name="cname3"]').val();
      var cname3ch1 = $('input[name="cname3-ch1"]').val();
      var cname3ch2 = $('input[name="cname3-ch2"]').val();
      var cname3text = $('textarea[name="cname3-text"]').val();
      // お客様名４
      var cname4 = $('input[name="cname4"]').val();
      var cname4ch1 = $('input[name="cname4-ch1"]').val();
      var cname4ch2 = $('input[name="cname4-ch2"]').val();
      var cname4text = $('textarea[name="cname4-text"]').val();
      // お客様名５
      var cname5 = $('input[name="cname5"]').val();
      var cname5ch1 = $('input[name="cname5-ch1"]').val();
      var cname5ch2 = $('input[name="cname5-ch2"]').val();
      var cname5text = $('textarea[name="cname5-text"]').val();
    // 苦情
    var replytext = $('textarea[name="reply-text"]').val();
    // 持ち出し
    var pcch = $('input[name="pc-ch"]').val();
    var tbch = $('input[name="tb-ch"]').val();
    var ather = $('textarea[name="ather"]').val();
    // 研修受講
    var se1 = $('input[name="se1"]').val();
    var se2 = $('input[name="se2"]').val();
    var se3 = $('input[name="se3"]').val();

    var msg = `${check}\n${check1}\n${time1}\n${check2}\n${time2}\n${cname1}\n${cname1ch1}\n${cname1ch2}\n${cname1text}\n${cname2}\n${cname2ch1}\n${cname2ch2}\n${cname2text}\n${cname3}\n${cname3ch1}\n${cname3ch2}\n${cname3text}\n${cname4}\n${cname4ch1}\n${cname4ch2}\n${cname4text}\n${cname5}\n${cname5ch1}\n${cname5ch2}\n${cname5text}\n${replytext}\n${pcch}\n${tbch}\n${ather}\n${se1}\n${se2}\n${se3}`;
    sendText(msg);

    return false;
  });
});