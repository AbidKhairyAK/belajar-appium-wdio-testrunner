import { $, driver, expect } from '@wdio/globals'

describe('coba test android', function () {
    it('login dengan username yang benar tapi password salah',  async function () {
        const usernameInput = await $('~test-Username')
        const passwordInput = await $('~test-Password')
        const loginButton = await $('~test-LOGIN')
        const errorMessage = await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('pass_random')
        await loginButton.click()

        await expect(errorMessage).toHaveText('Username and password do not match any user in this service.')
    })
})