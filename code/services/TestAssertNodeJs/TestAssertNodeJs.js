function TestAssertNodeJs(req, resp) {
  var assert = AssertNodeJs();
  log(assert(1<4));
  log('the next statement fails');
  log(assert(1>4));
  resp.success('Success');
}