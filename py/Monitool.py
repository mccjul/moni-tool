from pywinauto.application import Application
import time

class Monitool:

    def __init__(self):
        self.syst_name = 'ECD'
        self.client = '800'
        self.user = 'klu'
        self.pw = 'Welcome123'
        self.transactions = []
        print('Hello World')

    def pause(self, seconds):
        time.sleep(seconds)

    def open_sap_logon(self):
        try:
            print("Checking if App is already opened.")
            self.app = Application().Connect(path=r"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\saplogon.exe")
            self.dlg = self.app.Dialog
        except:
            print("Opening App.")
            self.app = Application().Start(cmd_line=u'"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\saplogon.exe"')
            self.dlg = self.app.Dialog

    def connect_sap_system(self):
        print("Opening system instance.")
        self.dlg.Button7.click()  # list view
        syst_list = self.dlg.listView
        self.pause(2)

        try:
            syst_list.type_keys("{HOME}")
            syst_list.GetItem(self.syst_name).Click()
            self.dlg['Log&On'].Click()
        except ValueError:
            print("Please add system in SAP logon")
            self.app.Kill_()

        print("Login user.")
        sap_frontend_session = self.app.window(class_name='SAP_FRONTEND_SESSION')
        sap_frontend_session.type_keys(self.user + "{TAB}" + self.pw)
        sap_frontend_session.type_keys("{TAB 21}")
        sap_frontend_session.type_keys("^a{BKSP}" + self.client)
        sap_frontend_session.type_keys("{ENTER}")

    def set_system(self, system):
        self.syst_name = system

