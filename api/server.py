import bottle

import sys
assert len(sys.argv) == 2, "Missing arg (prod or dev?)"
assert sys.argv[1] in ['prod', 'dev'], "Unknown running mode"

running_mode = sys.argv[1]

from common.cors import *
from common.config import *
from common.logging import *
from common.mail_service import *

init_logger(running_mode)

app = bottle.default_app()
for k in ['jwtsecret', 'jwtexp', 'jwtalgo', 'cookie_secret', 'refreshexp', 'forgot_pass_template',
          'smtp_from_email_address', 'smtp_host', 'smtp_port', 'smtp_secret', 'smtp_user']:
    app.config[k] = config[k]

# Mail service
mail = get_mail_session(host=config['smtp_host'], port=config['smtp_port'], smtp_user=config['smtp_user'],
                        smtp_secret=config['smtp_secret'])
# added mail service in application context
app.config['mail'] = mail

from controllers.index import *
from controllers.auth import *
from controllers.users import *
from controllers.models import *
from controllers.contexts import *
from controllers.tasks import *
from controllers.examples import *

if running_mode == 'dev':
    app.config['mode'] = 'dev'
    bottle.run(host='0.0.0.0', port=8081, debug=True, server='cheroot', reloader=True, certfile='/home/ubuntu/.ssl/dynabench.org.crt', keyfile='/home/ubuntu/.ssl/dynabench.org-key.pem')
elif running_mode == 'prod':
    app.config['mode'] = 'prod'
    bottle.run(host='0.0.0.0', port=8080, debug=True, server='cheroot') # , certfile='', keyfile=''
