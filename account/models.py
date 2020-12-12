from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager
)


# Create your models here.
class AccountManager(BaseUserManager):
    def create_user(self, email, name=None, contact_no=None, password=None, image=None):
        if not email:
            raise ValueError("User must have email address")
        user = self.model(
            email=self.normalize_email(email),
            contact_no=contact_no,
            name=name,
            image=image,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name=None, contact_no=None, password=None, image=None):
        user = self.create_user(email, name, contact_no, password, image)
        user.is_admin = True
        user.is_company = True
        user.save(using=self._db)
        return user

    def create_company(self, email, name=None, contact_no=None, password=None, image=None):
        user = self.create_user(email, name, contact_no, password, image)
        user.is_admin = False
        user.is_company = True
        user.save(using=self._db)
        return user

    def create_employee(self, email, name=None, contact_no=None, password=None, image=None):
        user = self.create_user(email, name, contact_no, password, image)
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    email = models.EmailField(
        verbose_name="Enter your email",
        unique=True
    )
    contact_no = models.CharField(
        max_length=20,
        verbose_name="Contact Number",
        null=True, blank=True,
    )
    first_name = models.CharField(
        max_length=100,
        verbose_name="First Name",
        null=True, blank=True,
    )
    last_name = models.CharField(
        max_length=100,
        verbose_name="last Name",
        null=True, blank=True,
    )
    name = models.CharField(
        max_length=100,
        verbose_name="Name",
        null=True, blank=True,
    )
    is_company = models.BooleanField(
        default=False,
        verbose_name="Company",
    )

    image = models.ImageField(
        verbose_name="Image",
        upload_to='admin/',
        null=True, blank=True
    )
    role = models.CharField(
        max_length=20,
        verbose_name="User Role",
        null=True, blank=True,
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_employee = models.BooleanField(
        default=False,
        verbose_name="Employee",
    )
    objects = AccountManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_level):
        return True

    @property
    def is_employee(self):
        return self.is_employee

    class Meta:
        db_table = 'user'
