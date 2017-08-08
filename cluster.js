function RoundRobinHandle(key,address,port,addressType,backlog,fd) {
  this.server = net.createServer(assert.fail)
  var self = this
  this.server.once('listening',function () {
    self.handle.onconnection = self.distribute.bind(self);
  });
}

RoundRobinHandle.prototype.distrbute = function (err, handle) {
  this.handles.push(handle);
  var worker = this.free.shift();
  if(worker) this.handoff(worker);
}

RoundRobinHandle.prototype.handoff = function (worker) {
  var message = { act: 'newconn', key: this.key };
  var self = this;
  sendHelper(work.process,message,handle,function (reply) {

  });
}
