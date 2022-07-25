Feature: Find Address by ZIP code in PostOffice web service

    Scenario Outline: Search for ZIP code in Post Office web service

        When I Call the webservice passing the "<ZIP>" code I should see the "<Address>"
       # When I Call the webservice passing the "<ZIP>" code
       # Then The result should contain the "<Address>" in the result
    
        Examples: 
        | ZIP       | Address                                 |
        | 12040720  | Rua Professor Ernesto de Oliveira Filho |
        | 12062390  | Rua Minas Gerais                        |
        | 12030450  | Rua Inglaterra                          |