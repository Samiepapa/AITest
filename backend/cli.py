#-*- coding:utf-8 -*-
__author__ = "yongil80.cho@samsung.com"
__copyright__ = "Copyright 2022, Samsung Electronics"

import os
import sys

from pyfiglet import Figlet

from app.config import config_by_name
from app.libs.controller import Controller
from app.utils.helper import *
from app.utils.logger import *
logger = CustomLogger.__call__().logger

"""
 ENVIRONMENT VARIABLE
 - KPIBOT_MODE: 'dev' or 'prod'
"""
config = config_by_name[(os.getenv('SERVER_MODE') or 'dev')]
CONTROLLER = Controller()
CONTROLLER.init(
    path_manifest=config.PATH_MANIFEST,
    path_upload=config.PATH_UPLOAD,
    path_output=config.PATH_OUTPUT,
    path_model=config.PATH_MODEL)

"""
"""
def showhelp():
    print(f'usages: python cli.py\n')
    print(f'arguments\n')

    print(f'settings')
    print(f'  database: {config.PATH_DATABASE}\n')
    print(f'  upload: {config.PATH_UPLOAD}\n')

    print(f'commands')
    for k, v in commands.items():
        print(f'  {k:10}: {v[1]}')

commands = {
    'help': (showhelp, 'usage'),
    'start': (CONTROLLER.start_tests, 'start tests'),
    'exit': (sys.exit, 'exit'),
}

def main(argv):
    print(Figlet(font='slant').renderText(' MMC SERVER '))

    entered = ''
    while True:
        try:
            print('>>', end=' ')
            entered = str(input())
            if not entered:
                continue

            if entered in commands:
                commands[entered][0]()
            else:
                logger.warning('invalid command')
                showhelp()
                continue
        except KeyboardInterrupt:
            print('bye')
            break
        except Exception:
            logger.critical(get_callstack())
            continue

if __name__=='__main__':
    sys.exit(main(sys.argv))