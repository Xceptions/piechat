<template>
    <div class="container">
        <h1 class="chat_header text-center">{{ chat_header }}</h1>
        <div class="chat_content">
            <p1>The chats</p1>
        </div>
        <form @submit.prevent="sendChat" class="chat_footer">
            <div class="form-group">
                <label for="pwd">Message:</label>
                <input type="text" class="form-control" id="msg" name="msg"/>
            </div>
            <button type="submit" class="btn btn-success">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            chat_header: "Your chats",
        }
    },
    methods: {
        sendChat(submitEvent) {
            this.msg = submitEvent.target.elements.msg.value;
            let details = {}
            const username = this.$store.getters.USERNAME
            const token = this.$store.getters.USER_TOKEN
            details["message"] = this.msg
            details["sender"] = username
            details["receiver"] = "general"
            details["token"] = token.token
            this.$store.dispatch('sendChat', details)
            alert(this.$store.getters.MESSAGES)
        }
    }
}
</script>

<style>
.text-center {
    text-align: center;
}

.chat_content {
    height: 500px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.6);
}

.chat_footer {
    margin-top: 10px;
    height: 70px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    background-color: #fff;
    /* box-shadow: 0px 0px 5px 1px rgba(145, 145, 145, 0.6); */
}

/* .message-box {
    margin-left: 20px;
    width: 400px;
    line-height: 45px;
    vertical-align: middle;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(145, 145, 145, 0.6);
} */
</style>