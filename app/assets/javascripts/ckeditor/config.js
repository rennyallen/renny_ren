if (typeof(CKEDITOR) !== 'undefined') {
  CKEDITOR.addCss('.cke_editable { font-size: 16px; }');

  CKEDITOR.plugins.addExternal( 'lineheight', '/assets/ckeditor/plugins/lineheight/plugin.js' );
  CKEDITOR.plugins.addExternal( 'codeTag', '/assets/ckeditor/plugins/codeTag/plugin.js' );
  CKEDITOR.plugins.addExternal( 'iframe', '/assets/ckeditor/plugins/iframe/plugin.js' );
  CKEDITOR.plugins.addExternal( 'emoji', '/assets/ckeditor/plugins/emoji/plugin.js' );
  CKEDITOR.plugins.addExternal( 'wordcount', '/assets/ckeditor/plugins/wordcount/plugin.js' );

  CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    config.extraPlugins = 'codesnippet, codeTag, lineheight, iframe, emoji, wordcount';
    // config.codeSnippet_theme = 'pojoaque';
    // config.codeSnippet_theme = 'monokai';
    // config.contentsCss  = ["/ckeditor/contents.scss"];
    config.height = 600;
    config.line_height="1.2;1.4;1.6;1.8;2;2.2";
    config.emoji_emojiListUrl = '/assets/ckeditor/plugins/emoji/emoji.json';
    config.wordcount = {
      showCharCount: true,
    }

    /* Filebrowser routes */
    // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
    config.filebrowserBrowseUrl = "/ckeditor/attachment_files";

    // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
    config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";

    // The location of a script that handles file uploads in the Flash dialog.
    config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";

    // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
    config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";

    // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
    config.filebrowserImageBrowseUrl = "/ckeditor/pictures";

    // The location of a script that handles file uploads in the Image dialog.
    config.filebrowserImageUploadUrl = "/ckeditor/pictures?";

    // The location of a script that handles file uploads.
    config.filebrowserUploadUrl = "/ckeditor/attachment_files";

    config.allowedContent = true;
    config.filebrowserUploadMethod = 'form';

    // Toolbar groups configuration.
    config.toolbar = [
      { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source'] },
      { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
      // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
      // { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
      { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
      { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar' ] },
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
      '/',
      { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize', 'lineheight' ] },
      { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
      { name: 'plugins', items: [ 'CodeSnippet', 'Code', 'Iframe', 'EmojiPanel' ] }
    ];

    config.toolbar_mini = [
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
      { name: 'styles', items: [ 'Font', 'FontSize' ] },
      { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
      { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
      { name: 'plugins', items: [ 'EmojiPanel' ] }
    ];
  };
}
