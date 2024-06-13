import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'

describe('coba test android', function () {
    it ('coba scroll ke atas bawah', async function () {
        await scrollScreen(600, 100)
        await scrollScreen(100, 600)

        await driver.pause(2000)
    })

    it ('tekan tombol locked_out_user untuk mengisi form login', async function () {
        const usernameInput = await $('~test-Username')
        const lockUserButton = await $('//*[@content-desc="test-locked_out_user"]')

        await scrollScreen(1000, 100)
        await lockUserButton.click()
        await scrollScreen(100, 1000)

        expect(usernameInput).toHaveValue('locked_out_user')
    })

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