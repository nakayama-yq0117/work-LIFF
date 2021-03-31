var params = (new URL(document.location)).searchParams;


$(function () {
  // 送信
  $('form').submit(function () {
    // 出勤
    var work1 = $('select[name="work1"]').val()
    var time1 = $('input[name="time1"]').val()
    // 退勤
    var work2 = $('select[name="work2"]').val()
    var time2 = $('input[name="time2"]').val()
    // 訪問先
      // 訪問先１
      var cname1 = $('input[name="cname1"]').val();
      var cname1old = $('select[name="cname1old"]').val();
      var cname1think = $('select[name="cname1think"]').val();
      var cname1text = $('textarea[name="cname1-text"]').val();
      // お客様名２
      var cname2 = $('input[name="cname2"]').val();
      var cname2old = $('select[name="cname2old"]').val();
      var cname2think= $('select[name="cname2think"]').val();
      var cname2text = $('textarea[name="cname2-text"]').val();
      // お客様名３
      var cname3 = $('input[name="cname3"]').val();
      var cname3old = $('select[name="cname3old"]').val();
      var cname3think= $('select[name="cname3think"]').val();
      var cname3text = $('textarea[name="cname3-text"]').val();
      // お客様名４
      var cname4 = $('input[name="cname4"]').val();
      var cname4old = $('select[name="cname4old"]').val();
      var cname4think = $('select[name="cname4think"]').val();
      var cname4text = $('textarea[name="cname4-text"]').val();
      // お客様名５
      var cname5 = $('input[name="cname5"]').val();
      var cname5old = $('select[name="cname5old"]').val();
      var cname5think = $('select[name="cname5think"]').val();
      var cname5text = $('textarea[name="cname5-text"]').val();
    // 苦情
    var replytext = $('textarea[name="reply-text"]').val();
    // 持ち出し
    var pcch = $('select[name="pcch"]').val();
    var tbch = $('select[name="tbch"]').val();
    var ather = $('textarea[name="ather"]').val();
    // 研修受講
    var se1 = $('input[name="se1"]').val();
    var se2 = $('input[name="se2"]').val();
    var se3 = $('input[name="se3"]').val();

    var msg = `${work1}\n${time1}\n${work2}\n${time2}\n${cname1}\n${cname1old}\n${cname1think}\n${cname1text}\n${cname2}\n${cname2old}\n${cname2think}\n${cname2text}\n${cname3}\n${cname3old}\n${cname3think}\n${cname3text}\n${cname4}\n${cname4old}\n${cname4think}\n${cname4text}\n${cname5}\n${cname5old}\n${cname5think}\n${cname5text}\n${replytext}\n${pcch}\n${tbch}\n${ather}\n${se1}\n${se2}\n${se3}`;
    sendText(msg);

    return false;
  });
});
