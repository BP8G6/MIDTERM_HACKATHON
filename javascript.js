  

<script>
    function on_data(data) {
        $('#results1').empty();
        var users = data.response.docs;
        $.each(users, function(id,title) {

        var endlist = 'Issues'+users;
        $('#results1').prepend('<div>' + endlist + '</div>');
    }

    function on_search() {
        var query = $('#Genre').val();
        if (query.length == 0) {
            return;
        }

    
        var url='http://134.193.136.127:8983/solr/collection1_shard1_replica1/select?q=Credit%20card&wt=json&indent=true';
        $.getJSON(url);
    }

    function on_ready() {
        $('#search').click(on_search);
        $('body').keypress(function(kp) {
            if (kp.keyCode == '13') {
                on_search();
            }
        });
    }

    $(document).ready(on_ready);
</script>
</html>