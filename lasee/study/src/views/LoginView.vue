<template>
  <div class="login">
    <div class="min-h-screen pl-[102px]">
      <div class="w-full h-[100vh] max-w-md p-6 bg-white-25 bg-opacity-95  pt-[274px]">
        <form @submit.prevent="loginSubmit" class="space-y-6">
          <div class="text-left text-grey-200 font-semibold">
            <label for="userId" class="pl-2">Id</label>
            <input placeholder="User Id" type="text"  v-model="userId" id="userId" class="ml-2 p-1 flex-1 w-full border-gray-300 border-2 rounded-lg px-3 py-1 placeholder:font-normal" required>
          </div>
          <div class="text-left text-grey-200 font-semibold">
            <label for="userPassword" class="pl-2">Password</label>
            <input placeholder="User Password" type="password" v-model="userPassword" id="userPassword" class="ml-2 p-1 flex-1 w-full border-gray-300 border-2 rounded-lg px-3 py-1 placeholder:font-normal" required>
          </div>
          <div class="text-left text-grey-200 font-semibold pl-2">
            <!-- <input type="checkbox" name="" id="" class="custom-checkbox"> -->
            <input type="checkbox" id="chk" class="hidden w-[50px] h-[50px] border-black-2">
            <label for="chk"></label>
            <label for="userPassword" class="text-sm mx-1">자동로그인</label>
            <a href="" class="float-right text-blue-500 text-sm">비밀번호 찾기</a>
            <button type="submit" class="my-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white-100 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring-blue active:bg-blue-700 transition duration-150 ease-in-out">
            로그인
            </button>
          </div>
          <div class="font-semibold text-sm">
            아직 회원이 아니신가요?
            <a href="{{ link }}" class="text-blue-500 mx-2">회원가입하기</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      userId: '',
      userPassword: ''
    }
  },
  methods: {
    loginSubmit () {
      const saveData = {
        userId: this.userId,
        userPassword: this.userPassword
      }

      try {
        this.$axios.post('/signin', JSON.stringify(saveData), {
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => {
            if (response.status === 200) {
            // 로그인 성공시 처리 로직
            }
          })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
  .login {
    background-image: url('../assets/login_bg.svg');
    background-size: cover;
    background-position: center;
  }

  /* check box custom */
  #chk + label{
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    user-select: none; /* can not drag*/
    position: relative;
    padding: 10px;
    border-radius: 5px;
  }

  #chk:checked + label{
    background-color: white;
  }

  #chk + label + label{
    position: relative;
    user-select: none;
    vertical-align: middle;
    margin-left: 10px;
  }

  input:checked + label:before {
    content:'✔';
    width: 12px;
    height: 12px;
    top: 15%;
    left: 15%;
    margin-top:-4px;
    position: absolute;
    color:blue;
  }
</style>
