use strict;

open F, "< directory.csv";

while ( my $line = <F>) {
    chomp $line;
    #,Adrian MacLeod,x 16159,,Jim Yang,x 16166,,,

    if ( $line =~ /(\w+)\s(\w+),x\s\d+,,(\w+)\s(\w+),x\s\d+/ ) {
        my $first1 = lc($1);
        my $last1 = lc($2);
        my $first2 = lc($3);
        my $last2 = lc($4);

        print "db.tabs.insert({tab:0,firstname:\"$first1\",lastname:\"$last1\",email:\"$first1\.$last1\@nurun\.com\"})\n";
        print "db.tabs.insert({tab:0,firstname:\"$first2\",lastname:\"$last2\",email:\"$first2\.$last2\@nurun\.com\"})\n";
    }
}

close F;

