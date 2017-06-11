<?xml version="1.0" encoding="UTF-8" ?>
<Package name="unmute-choregraphe" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="test" src="test/test.dlg" />
        <Dialog name="test2" src="test2/test2.dlg" />
    </Dialogs>
    <Resources>
        <File name="laught" src="html/assets/laught.gif" />
        <File name="sad" src="html/assets/sad.gif" />
        <File name="favicon" src="html/favicon.ico" />
        <File name="index" src="html/index.html" />
        <File name="inline.bundle" src="html/inline.bundle.js" />
        <File name="inline.bundle.js" src="html/inline.bundle.js.map" />
        <File name="main.bundle" src="html/main.bundle.js" />
        <File name="main.bundle.js" src="html/main.bundle.js.map" />
        <File name="polyfills.bundle" src="html/polyfills.bundle.js" />
        <File name="polyfills.bundle.js" src="html/polyfills.bundle.js.map" />
        <File name="scripts.bundle" src="html/scripts.bundle.js" />
        <File name="scripts.bundle.js" src="html/scripts.bundle.js.map" />
        <File name="styles.bundle" src="html/styles.bundle.js" />
        <File name="styles.bundle.js" src="html/styles.bundle.js.map" />
        <File name="vendor.bundle" src="html/vendor.bundle.js" />
        <File name="vendor.bundle.js" src="html/vendor.bundle.js.map" />
    </Resources>
    <Topics>
        <Topic name="test_frf" src="test/test_frf.top" topicName="test" language="fr_FR" />
        <Topic name="test2_frf" src="test2/test2_frf.top" topicName="test2" language="fr_FR" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="fr_FR">
        <Translation name="translation_fr_FR" src="translations/translation_fr_FR.ts" language="fr_FR" />
    </Translations>
</Package>
