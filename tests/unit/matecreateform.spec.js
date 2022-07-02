import { mount } from '@vue/test-utils'
import MateCreateForm from '@/components/MateCreateForm'

describe('Testing MateCreateForm', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(MateCreateForm)

    // then
    expect(wrapper.find('#mate-create-offcanvas').classes()).not.toContain('show')
  })
})
