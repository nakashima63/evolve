
create table profiles (
  id uuid references auth.users not null primary key,
  user_name text not null unique,
  created_at timestamp with time zone default now(),
  created_by uuid references auth.users,
  updated_at timestamp with time zone default now(),
  updated_by uuid references auth.users,
  deleted_at timestamp with time zone
);

alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
