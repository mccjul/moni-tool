from pywinauto.application import Application
from pywinauto import Desktop
from pywinauto.keyboard import SendKeys
import json
import time
from datetime import date, timedelta
import pyautogui
from imagesearch import *
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException


# Add delay in the code for UI to catch up automation
def _pause(seconds):
    time.sleep(seconds)


def _click_pic_on_screen(pic, pause_time):
    pos = imagesearch(pic)
    if pos[0] != -1:
        print("position : ", pos[0], pos[1])
        pyautogui.moveTo(pos[0], pos[1])
        pyautogui.click()
    else:
        print("image not found")
    _pause(pause_time)


# START LOADING DATA

with open("moni_info.json", "r") as read_file:
    data = json.load(read_file)

syst_name = data['system']
conn = data['connection']
client = conn['client']
user = conn['username']
pw = conn['password']
transactions = data['transaction_info']

desktop = Desktop(backend="uia")

# END LOADING DATA


# START LOADING TRANSACTION TASKS

def SM12(sap_frontend_session):
    sap_frontend_session.type_keys('{TAB 3}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("*")
    sap_frontend_session.type_keys("{F8}")


def SM13(sap_frontend_session):
    sap_frontend_session.type_keys('{TAB 3}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("{F8}")


def SM21(sap_frontend_session):
    today = date.today()
    yesterday = today - timedelta(1)
    tomorrow = today + timedelta(1)

    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(yesterday.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys('00:00:00')
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys(tomorrow.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB 11}')
    sap_frontend_session.type_keys('{SPACE}')
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("{F8}")
    _pause(2)


def SM37(sap_frontend_session):
    today = date.today()
    yesterday = today - timedelta(1)
    tomorrow = today + timedelta(1)

    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("*")
    sap_frontend_session.type_keys('{TAB 2}{SPACE}{TAB}{SPACE}{TAB 2}{SPACE}{TAB 2}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(yesterday.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(tomorrow.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys("{F8}")
    _pause(2)


def SM58(sap_frontend_session):
    today = date.today()
    start_date = today - timedelta(5)
    tomorrow = today + timedelta(1)

    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(start_date.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(tomorrow.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB 2}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("*")
    sap_frontend_session.type_keys("{F8}")
    _pause(2)


def SMICM(sap_frontend_session):
    sap_frontend_session.type_keys("+{F1}")
    _pause(0.5)


def SMQ(sap_frontend_session):
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("*")
    sap_frontend_session.type_keys("{F8}")


def SP01(sap_frontend_session):
    today = date.today()
    start_date = today - timedelta(1)

    sap_frontend_session.type_keys('{TAB 2}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("*")
    sap_frontend_session.type_keys('{TAB 2}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(start_date.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys("{F8}")

def SP12(sap_frontend_session):
    menu_item = sap_frontend_session.MenuItem(u'TemSe &Data Storage->Consistency chec&k')
    menu_item.Click()
    _pause(500)


def ST22(sap_frontend_session):
    today = date.today()
    start_date = today - timedelta(1)
    tomorrow = today + timedelta(1)

    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(start_date.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys(tomorrow.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB 11}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys("{F8}")
    _pause(5)

def SXI_MONITOR(sap_frontend_session):
    today = date.today()
    start_date = today - timedelta(1)

    sap_frontend_session.type_keys('{TAB 2}')
    sap_frontend_session.type_keys('e{ENTER}')
    _pause(1)
    sap_frontend_session.type_keys('{TAB 2}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(start_date.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB}')
    sap_frontend_session.type_keys('00:00:00')
    sap_frontend_session.type_keys("{F8}")
    _pause(2)

    # Checking if there is a information dialog that appeared
    try:
        sap_frontend_session = app.window(title_re='Information')
        sap_frontend_session.type_keys("{ENTER}")
        print('No errors found')
    except:
        _pause(3)


def WE05(sap_frontend_session):
    today = date.today()
    start_date = today - timedelta(1)

    sap_frontend_session.type_keys('{TAB 3}')
    sap_frontend_session.type_keys("^a{BKSP}")
    sap_frontend_session.type_keys(start_date.strftime('%d.%m.%Y'))
    sap_frontend_session.type_keys('{TAB 13}')
    sap_frontend_session.type_keys('51')
    sap_frontend_session.type_keys("{F8}")
    _pause(2)

    # Checking if there is a information dialog that appeared
    try:
        sap_frontend_session = app.window(title_re='Information')
        sap_frontend_session.type_keys("{ENTER}")
        print('No errors found')
    except:
        _pause(3)


def manual_steps(sap_frontend_session):
    print("Please complete manual steps for now")
    _pause(2)
    return

tasks = {
    'SM12': SM12,
    'SM13': SM13,
    'SM21': SM21,
    'SM37': SM37,
    'SM58':SM58,
    "SMICM": SMICM,
    "SMQ1": SMQ,
    "SMQ2": SMQ,
    "SOST": manual_steps,
    "SP01":SP01,
    "SP12":SP12,
    "ST06":manual_steps,
    "ST22":ST22,
    "SXI_MONITOR": SXI_MONITOR,
    "WE05":WE05
}

# END LOADING TRANSACTIONS TASKS


# START OPENING SAP LOGON #

try:
    print("Checking if App is already opened.")
    app = Application().Connect(path=r"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\saplogon.exe")
    dlg = app.Dialog
except:
    print("Opening App.")
    app = Application().Start(cmd_line=u'"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\saplogon.exe"')
    dlg = app.Dialog
    dlg.Wait('visible')

_pause(1)
print("Opening system instance.")
dlg.Button7.click() #list view
syst_list = dlg.listView
syst_list_txt = syst_list.texts()

# json_data = []
# data = ''
#
# for i in range(3, len(syst_list_txt), 7):
#     data = {
#         "client": "Dollarcity",
#         "system": syst_list_txt[i]
#     }
#     json_data.append(data)
#
# with open('options.json', 'w') as outfile:
#     json.dump(json_data, outfile)


try:
    syst_list.type_keys("{HOME}")
    syst_list.GetItem(syst_name).Click()
    dlg['Log&On'].Click()
except ValueError:
    print("Please add system in SAP logon")
    app.Kill_()

# END OPENING SAP LOGON


# START LOGIN USER AND SYSTEM

# dlg = desktop['SAP']
print("Login user.")
sap_frontend_session = app.window(class_name='SAP_FRONTEND_SESSION')
sap_frontend_session.type_keys(user + "{TAB}" + pw)
sap_frontend_session.type_keys("{TAB 21}")
sap_frontend_session.type_keys("^a{BKSP}"+client)
sap_frontend_session.type_keys("{ENTER}")

# END LOGIN USER AND SYSTEM

def _execute_transaction(transaction):
    print("Executing transaction " + transaction)
    sap_frontend_session = app.window(title_re='SAP Easy Access.*')
    transaction_box = sap_frontend_session.Edit
    transaction_box.SetEditText(transaction)
    sap_frontend_session.type_keys("{ENTER}")


def _back_to_main_win():
    print('Going back to main window.')
    sap_frontend_session = app.window(class_name='SAP_FRONTEND_SESSION')
    transaction_box = sap_frontend_session.Edit
    transaction_box.Click()
    transaction_box.SetEditText('/n')
    sap_frontend_session.type_keys("{ENTER}")


def _execute_tasks(transaction):
    print("Executing tasks related to " + transaction)
    sap_frontend_session = app.window(class_name='SAP_FRONTEND_SESSION')
    try:
        if transaction in tasks:
            tasks[transaction](sap_frontend_session)
            _pause(2)
    except KeyError:
        print('Could not find transaction tasks for ' + transaction)
        return

# START ENTER TRANSACTION

_pause(2)
for transaction in transactions:
    _execute_transaction(transaction)
    _pause(1)
    _execute_tasks(transaction)
    _pause(1)
    _back_to_main_win()
    _pause(1)

print("Execution completed.")

# END ENTER TRANSACTION


# window_name.print_control_identifiers()
# app.Kill_()
print("App terminated.")

print("Connection to PI Java stack")

# START OPENING SAP LOGON #

url ='http://abi-sapposrv.cicm.cmtek.com:50000/pimon'
# url = 'http://dp6.desco.com:53300/pimon'

try:
    driver = webdriver.Edge(executable_path=r'C:\Users\klu\Documents\SeleniumDriver\MicrosoftWebDriver.exe')
    driver.get(url)

    title = WebDriverWait(driver, 5).until(EC.title_contains('SAP'))
    print(driver.title)
    username = driver.find_element_by_name('j_username')
    username.send_keys(user)
    password = driver.find_element_by_name('j_password')
    password.send_keys(pw)
    password.send_keys(Keys.RETURN)
    _pause(10)

except WebDriverException as e:
    print(str(e))

except:
    print("Error occured...")
    driver.close()

# END OPENING SAP LOGON


# START GET TO MESSAGE MONITORING PAGE

_click_pic_on_screen('ref_pics/adapter_engine.png', 5)
_click_pic_on_screen('ref_pics/message_monitor.png', 10)
_click_pic_on_screen('ref_pics/database.png', 2)

# END GET TO MESSAGE MONITORING PAGE


# START MESSAGE MONITORING STEPS

def _apply_filter(driver, char_filter):
    msg_filter = driver.find_element_by_id('CEPJICNK.MessageFilterView.FindStatus')
    msg_filter.click()
    _pause(0.5)
    msg_filter.send_keys(char_filter)
    msg_filter.send_keys(Keys.RETURN)


driver.switch_to.window(driver.window_handles[1])

time_period = driver.find_element_by_id('CEPJICNK.MessageFilterView.TimePeriodDropDown')
time_period.click()
_pause(0.5)
time_period.send_keys(Keys.ARROW_UP)
time_period.send_keys(Keys.RETURN)
_pause(5)

today = date.today()
start_date = today - timedelta(1)

startDate = driver.find_element_by_name('CEPJICNK.MessageFilterView.StartInputField')
startDate.clear()
startDate.send_keys(start_date.strftime('%d/%m/%Y'))
_pause(0.5)

startTime = driver.find_element_by_id('CEPJICNK.MessageFilterView.StartInputField:A')
startTime.clear()
startTime.send_keys('12:00:00 AM')
startTime.send_keys(Keys.RETURN)
_pause(1)

filters = ['a', 'w', 'h', 'u']

for char_filter in filters:
    _apply_filter(driver, char_filter)
    _click_pic_on_screen('ref_pics/go.png', 2)

# driver.close()

# END MESSAGE MONITORING STEPS

#  Close tab and switch to original tab
driver.close()
driver.switch_to.window(driver.window_handles[0])

#  START COMMUNICATION CHANNEL MONITORING

#  Get to channel monitoring page
_click_pic_on_screen('ref_pics/communication_channel.png', 3)
driver.switch_to.window(driver.window_handles[1])

channel_status = driver.find_element_by_id('CEPJICNK.SearchView.Status')
channel_status.click()
_pause(0.5)
channel_status.send_keys('c')
channel_status.send_keys(Keys.RETURN)

_click_pic_on_screen('ref_pics/go.png', 2)

driver.close()
# END COMMUNICATION CHANNEL MONITORING

driver.switch_to.window(driver.window_handles[0])
driver.close()