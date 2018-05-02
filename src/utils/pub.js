
export default {
    handlers : {},
    //发布事件
    public : function (eventType){
        let handlerArgs = Array.prototype.slice.call(arguments,1);
        for(let i = 0; i < this.handlers[eventType].length; i++) {
            this.handlers[eventType][i].apply(this,handlerArgs);
        }
        return this;
    },
    //订阅事件
    subscribe : function(eventType, handler){
        if(!(eventType in this.handlers)) {
            this.handlers[eventType] = [];
        }
        this.handlers[eventType].push(handler);
        return this;
    }
}