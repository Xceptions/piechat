<template>
    <div class="container">
        <h1 class="loginheader text-center">{{ loginheadertext }}</h1>
        <form @submit.prevent="login" class="loginform">
            <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" id="email" name="email"/>
            </div>
            <div class="form-group">
                <label for="pwd">Password</label>
                <input type="password" class="form-control" id="pwd" name="password"/>
            </div>
            <div class="form-group form-check">
                <label>
                    <input class="form-check-input" type="checkbox"> Remember me
                </label>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
            <br/><br/>
            <router-link to="/signup" class='signuplink'>Sign up</router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            loginheadertext: "Login To Piechat"
        }
    },
    methods: {
        login(submitEvent) {
            this.email = submitEvent.target.elements.email.value
            this.pwd = submitEvent.target.elements.password.value
            let details = {}
            details["username"] = this.email
            details["password"] = this.pwd
            this.$store.dispatch('loginUser', details)
            const user_session = this.$store.getters.USER_TOKEN    
            if (typeof(user_session.token) == 'string') {
                this.$router.push('/home')
            }
        }
    }
}

</script>

<style>
.loginheader {
    text-align: center;
    margin-bottom: 40px;
}

.loginform{
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
}
</style>