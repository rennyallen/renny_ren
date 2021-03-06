$ ->
  $('.carousel-modal').modal({
    onShow: () ->
      $('.jR3DCarouselGallery').addClass('active')
    onHide: () ->
      $('.jR3DCarouselGallery').removeClass('active')
  })

  $('.feedback-container').on 'ajax:success', ->
    $('.feedback-container').removeClass('warning')
    $('.feedback-container').addClass('success')
    $('#message_body')[0].value = ''
    $('#message_author')[0].value = ''
    $('#message_contact_info')[0].value = ''

  $('.feedback-container').on 'ajax:error', (event, xhr, status, error) ->
    $('.feedback-container').addClass('warning')

  $('.jR3DCarouselGallery').click (e) ->
    if e.target.nodeName == 'IMG'
      $('.carousel-modal').modal('show')
