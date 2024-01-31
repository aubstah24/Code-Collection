// Code written by Aubrie Usui for PowerApp Backend using a Sign-In Interface

// TRUE IF NO ERRORS, FALSE IF AN ERROR OCCURRED
Set(
    Boolean,
    "True"
);
// ERROR CATCHES FOR MISSING FIELD DATA
If(IsBlank(serviceTag), Set(serviceTag, "Tag"));

// If Description Text Box is blank & Other is chosen, set Boolean = false and throw error
If(
    And(
        IsBlank(IssueDescription),
        r1 = "Other"
    ),
    And(
        Set(
            Boolean,
            "False"
        ),
        Notify(
            "Some fields are missing",
            NotificationType.Error
        )
    )
);

// If Name Box is blank OR Issue is not chosen, set Boolean = false and throw error
If(
    Or(
        IsBlank(ComboBox1),
        IsBlank(Radio1)
    ),
    And(
        Set(
            Boolean,
            "False"
        ),
        Notify(
            "Some fields are missing",
            NotificationType.Error
        )
    )
);

// If Mouse/Keyboard issue is chosen & Other description is chosen & Description Text Box is Blank, set Boolean = false and throw error
If(
    And(
        r1 = "Mouse/Keyboard",
        r2 = "Other",
        IsBlank(IssueDescription)
    ),
    And(
        Set(
            Boolean,
            "False"
        ),
        Notify(
            "Some fields are missing",
            NotificationType.Error
        )
    )
);

// If Outlook Issues is chosen & Other description is chosen & Description Text Box is Blank, set Boolean = false and throw error
If(
    And(
        r1 = "Outlook Issues",
        r3 = "Other",
        IsBlank(IssueDescription)
    ),
    And(
        Set(
            Boolean,
            "False"
        ),
        Notify(
            "Some fields are missing",
            NotificationType.Error
        )
    )
);

// If Headset Issues is chosen & Other description is chosen & Description Text Box is Blank, set Boolean = false and throw error
If(
    And(
        r1 = "Headset Issues",
        r4 = "Other",
        IsBlank(IssueDescription)
    ),
    And(
        Set(
            Boolean,
            "False"
        ),
        Notify(
            "Some fields are missing",
            NotificationType.Error
        )
    )
);
//ERROR CATCHES END


//IF FA-MOBILE DEVICE OR BITLOCKER OPTION IS CHOSEN
// send hard coded issue description as parameter
If(
    And(
        Boolean = "True",
        r1 = "Bitlocker"
    ),
    And(
        'TechHuiAutomation3.0'.Run(
            Radio1.Selected.Value,
            ComboBox1.Selected.DisplayName,
            "Laptop needs Bitlocker Recovery Key to unlock",
            ComboBox1.Selected.Mail,
            serviceTag
        ),
        Navigate(Success)
    ),
    And(
        Boolean = "True",
        r1 = "FA - Mobile Device Pick-up"
    ),
    And(
        'TechHuiAutomation3.0'.Run(
            Radio1.Selected.Value,
            ComboBox1.Selected.DisplayName,
            "Phone pick-up for FAMD project",
            ComboBox1.Selected.Mail,
            serviceTag
        ),
        Navigate(Success)
    ), //IF OTHER IS CHOSEN -- send Text box input as parameter
    And(
        Boolean = "True",
        r1 = "Other"
    ),
    And(
        'TechHuiAutomation3.0'.Run(
            Radio1.Selected.Value,
            ComboBox1.Selected.DisplayName,
            IssueDescription.Text,
            ComboBox1.Selected.Mail,
            serviceTag
        ),
        Navigate(Success)
    ), // IF ISSUE 2 SELECTED
    And(
        Boolean = "True",
        selected = "R2"
    ), 
    If(
        // IF OTHER DESCRIPTION SELECTED -- send Text box input as parameter
        r2 = "Other",
        And(
            'TechHuiAutomation3.0'.Run(
                Radio1.Selected.Value,
                ComboBox1.Selected.DisplayName,
                IssueDescription.Text,
                ComboBox1.Selected.Mail,
                serviceTag
            ),
            Navigate(Success)
        ),
        // else send value selected in radio2 
        And(
            'TechHuiAutomation3.0'.Run(
                Radio1.Selected.Value,
                ComboBox1.Selected.DisplayName,
                Radio2.Selected.Value,
                ComboBox1.Selected.Mail,
                serviceTag
            ),
            Navigate(Success)
        )
    ), //IF ISSUE 3 SELECTED
    And(
        Boolean = "True",
        selected = "R3"
    ),
    If(
        // IF OTHER DESCRIPTION SELECTED -- send Text box input as parameter
        r3 = "Other",
        And(
            'TechHuiAutomation3.0'.Run(
                Radio1.Selected.Value,
                ComboBox1.Selected.DisplayName,
                IssueDescription.Text,
                ComboBox1.Selected.Mail,
                serviceTag
            ),
            Navigate(Success)
        ),
        // else send value selected in Radio3
        And(
            'TechHuiAutomation3.0'.Run(
                Radio1.Selected.Value,
                ComboBox1.Selected.DisplayName,
                Radio3.Selected.Value,
                ComboBox1.Selected.Mail,
                serviceTag
            ),
            Navigate(Success)
        )
    ),
    And(
        Boolean = "True",
        selected = "R4"
    ),
    If(
        // IF OTHER DESCRIPTION SELECTED -- send Text box input as parameter
        r4 = "Other",
        And(
            'TechHuiAutomation3.0'.Run(
                Radio1.Selected.Value,
                ComboBox1.Selected.DisplayName,
                IssueDescription.Text,
                ComboBox1.Selected.Mail,
                serviceTag
            ),
            Navigate(Success)
        ),
        // else send value selected in Radio4
        And(
            'TechHuiAutomation3.0'.Run(
                Radio1.Selected.Value,
                ComboBox1.Selected.DisplayName,
                Radio4.Selected.Value,
                ComboBox1.Selected.Mail,
                serviceTag
            ),
            Navigate(Success)
        )
    )
);

// start timer for confirmation page TTL until it navigates to home screen
Set(startTimer, true);