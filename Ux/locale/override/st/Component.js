Ext.define('Ux.locale.override.st.Component', {
    override : 'Ext.Component',

    requires : [
        'Ux.locale.Manager'
    ],

    enableLocale : false,
    locale       : null,
    locales      : null,

    constructor : function(config) {
        var me = this;

        config = Ux.locale.Manager.isLocalable(me, config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(Ux.locale.Manager.getLanguage());
        }
    },

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            html        = locales.html,
            tpl         = locales.tpl,
            manager     = me.locale,
            defaultText = '',
            defaultTpl  = '';

        if (html) {
            if (Ext.isObject(html)) {
                defaultText = html.defaultText;
                html        = html.key;
            }

            html = manager.get(html, defaultText);

            if (Ext.isString(html)) {
                me.setHtml(html);
            }
        }
        
        if (tpl) {
            if (Ext.isObject(tpl)) {
                defaultTpl = tpl.defaultTpl;
                tpl = tpl.key;
            }

            tpl = manager.get(tpl, defaultTpl);

            if (Ext.isString(tpl)) {
                me.setTpl(tpl);
                me.setData(me.getData());
            }
        }
    }
});
