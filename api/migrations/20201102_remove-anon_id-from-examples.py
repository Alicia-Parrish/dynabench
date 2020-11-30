# Copyright (c) Facebook, Inc. and its affiliates.

"""
Add api_token to users
"""

from yoyo import step


__depends__ = {}

steps = [
    step(
        "ALTER TABLE examples DROP COLUMN anon_id",
        "ALTER TABLE examples ADD COLUMN anon_id INT(11)",
    )
]
