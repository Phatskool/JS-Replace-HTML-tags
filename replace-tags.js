<script type="javascript">
jQuery(function() {
    jQuery('.rotator-text span').each(function(i, em) {
       jQuery(em).replaceWith('<span><h1 class="clrall">'+jQuery(em).html()+'</h1></span>');
    });
});
</script>

