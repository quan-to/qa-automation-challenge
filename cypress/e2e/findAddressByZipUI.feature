Feature: Find Address by ZIP code in PostOffice website

    Scenario Outline: Search for ZIP code in Post Office website

        Given I visit the post office website
        When I click in the ZIP code search box
            And Insert the "<ZIP>" code
            And Click in search button
        Then I should see the result page with the "<Address>"
    
        Examples: 
        | ZIP       | Address                                 |
        | 12040720  | Rua Professor Ernesto de Oliveira Filho |
        | 12062390  | Rua Minas Gerais                        |
        | 12030450  | Rua Inglaterra                          |