<template>
    <div class="login-page">
        <div class="form-wrap">
            <a-form
                name="custom-validation"
                ref="ruleForm"
                :model="formData"
                :rules="rules"
                v-bind="formConfig.layout"
            >
                <a-form-item required>
                    <a-input placeholder="用户名" v-model:value="formData.username">
                        <template #prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
                    </a-input>
                </a-form-item>
                <a-form-item required>
                    <a-input type="password" placeholder="密码" v-model:value="formData.password">
                        <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
                    </a-input>
                </a-form-item>
                <a-form-item required>
                    <a-row>
                        <a-col :span="14">
                            <a-input type="imgCode" placeholder="验证码">
                                <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
                            </a-input>
                        </a-col>
                        <a-col :span="6">
                            <image-verify></image-verify>
                        </a-col>
                    </a-row>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" block>登录</a-button>
                </a-form-item>
            </a-form>
            <div>
                <a href="">忘记密码</a> |
                <a href="">注册</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import ImageVerify from '../../components/ImageVerify.vue';
export default defineComponent({
    components: {
        ImageVerify
    },
    setup(props) {
        const formConfig = reactive({
            layout: {
                // labelCol: { span: 4 },
                // wrapperCol: { span: 14 }
            },
            formData: {
                username: 'admin',
                password: '111'
            }
        })
        const formData = formConfig.formData;
        return {
            formConfig,
            formData
        };
    }
})
</script>
<style lang="scss">
@import '../../styles/mixin.scss';
.login-page {
    @include wh(100vw, 100vh);
    @include fl();
    .form-wrap {
        width: 320px;
    }
    .ant-col {
        width: 100%;
    }
    .img-verify {
        margin: 4px 0 0 12px;
    }
}
</style>