
describe('Access forms', () => {
    it('Access forms', async () => {

        await driver.launchApp()
        await $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView[2]').click();
        await $('~text-input').setValue('test');

        expect(await $('~input-text-result').getText()).toBe('test');

        await $('~Dropdown').click();
    });
});