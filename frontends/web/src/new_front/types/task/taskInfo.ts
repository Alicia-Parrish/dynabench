export type TaskInfoType = {
  active: number;
  aws_region: string;
  build_sqs_queue: string;
  challenge_type: number;
  config_yaml: string;
  context: string;
  create_endpoint: number;
  cur_round: number;
  challenge_type_info: ChallengeType;
  decen_aws_region: string;
  decen_bucket: string;
  decen_queue: string;
  desc: string;
  dynalab_hr_diff: number;
  dynalab_threshold: number;
  dynamic_adversarial_data_collection: number;
  dynamic_adversarial_data_validation: number;
  eval_server_id: string;
  eval_sqs_queue: string;
  extra_torchserve_config: string;
  gpu: number;
  has_predictions_upload: number;
  hidden: number;
  id: number;
  instance_count: number;
  instance_type: string;
  instructions_md: string;
  is_decen_task: number;
  last_updated: string;
  mlcube_tutorial_markdown: string;
  name: string;
  num_matching_validations: number;
  is_building: number;
  predictions_upload_instructions_md: string;
  round: roundInfoType;
  s3_bucket: string;
  submitable: number;
  task_aws_account_id: string;
  task_code: string;
  task_gateway_predict_prefix: string;
  train_file_upload_instructions_md: string;
  unique_validators_for_example_tags: number;
  unpublished_models_in_leaderboard: number;
  validate_non_fooling: number;
  image_url: string;
  documentation_url: string;
  challenge_type_name: string;
  accept_sandbox_creation: number;
  creation_example_md: string;
  max_amount_examples_on_a_day: number;
  is_finished: number;
  submitable_predictions: number;
  show_leaderboard: number;
  show_trends: number;
  show_user_leaderboard: number;
  show_user_leaderboard_csv: number;
};

type roundInfoType = {
  desc: string;
  end_datetime: string;
  id: number;
  longdesc: string;
  rid: number;
  secret: string;
  start_datetime: string;
  tid: number;
  total_collected: number;
  total_fooled: number;
  total_time_spent: number;
  total_verified_fooled: number;
};

export type ChallengeType = {
  id: number;
  name: string;
  url: string;
};
